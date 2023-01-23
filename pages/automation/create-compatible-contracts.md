# Create compatible contracts

Contract that are compatible with the `IAutomateCompatible` Ankr interface allow you to create custom logic tasks and automate contract function execution based on that logic.

A compatible contract contains:
1. A checker, that repeatedly checks on an event.
2. A follow-up executor, that contains the custom logic and executes it when the checker returnss `true`. 

## `IAutomateCompatible` interface
The interface contains a checker `checkTask()` and an executor with the custom logic `performTask()`.
```
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

interface IAutomateCompatible {
  /**
   * @notice method that is simulated by the automators to see if any work actually
   * needs to be performed. This method does does not actually need to be
   * executable, and since it is only ever simulated it can consume lots of gas.
   * @dev To ensure that it is never called, you may want to add the
   * cannotExecute modifier from AutomateBase to your implementation of this
   * method.
   * @param checkData specified in the task registration so it is always the
   * same for a registered task. This can easily be broken down into specific
   * arguments using `abi.decode`, so multiple tasks can be registered on the
   * same contract and easily differentiated by the contract.
   * @return taskNeeded boolean to indicate whether the automator should call
   * performtask or not.
   * @return performData bytes that the automator should call performtask with, if
   * task is needed. If you would like to encode data to decode later, try
   * `abi.encode`.
   */
  function checkTask(bytes calldata checkData) external returns (bool taskNeeded, bytes memory performData);

  /**
   * @notice method that is actually executed by the automators, via the registry.
   * The data returned by the checkTask simulation will be passed into
   * this method to actually be executed.
   * @dev The input to this method should not be trusted, and the caller of the
   * method should not even be restricted to any single registry. Anyone should
   * be able call it, and the input should be validated, there is no guarantee
   * that the data passed in is the performData returned from checkTask. This
   * could happen due to malicious automators, racing automators, or simply a state
   * change while the performTask transaction is waiting for confirmation.
   * Always validate the data passed in.
   * @param performData is the data which was passed back from the checkData
   * simulation. If it is encoded, it can easily be decoded into other types by
   * calling `abi.decode`. This data should not be trusted, and should be
   * validated against the contract's current state.
   */
  function performTask(bytes calldata performData) external;
}
```

## Example contract
To use the custom logic option in Ankr Automation, your contract must meet the following requirements:
* Inherit the `IAutomateCompatible` interface.
* Use the `IAutomateCompatible` interface in the way that is compatible with Ankr Automation.
* Implement the function `checkTask()` that will be executed off-chain to see if the logic in `performTask()` needs to be executed.
* Implement the `performTask()` that will be executed on-chain when `checkTask()` returns `true`.

Following these requirements, our example contract will increase a counter after every `interval` seconds.
If you register this contract as a Task in Ankr Automation, the Automation simulates `checkTask` off-chain during every block to determine if the `interval` seconds have passed since the `lastTimeStamp`. 
When `checkTask` returns `true`, the Automation  calls `performTask()` on-chain and increments the counter. This cycle repeats until the Task is cancelled or runs out of funding.

```
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

// AutomationCompatible.sol imports the functions from both ./AutomationBase.sol and
// ./interfaces/AutomationCompatibleInterface.sol

interface IAutomateCompatible {
  /**
   * @notice method that is simulated by the automators to see if any work actually
   * needs to be performed. This method does does not actually need to be
   * executable, and since it is only ever simulated it can consume lots of gas.
   * @dev To ensure that it is never called, you may want to add the
   * cannotExecute modifier from AutomateBase to your implementation of this
   * method.
   * @param checkData specified in the task registration so it is always the
   * same for a registered task. This can easily be broken down into specific
   * arguments using `abi.decode`, so multiple tasks can be registered on the
   * same contract and easily differentiated by the contract.
   * @return taskNeeded boolean to indicate whether the automator should call
   * performtask or not.
   * @return performData bytes that the automator should call performtask with, if
   * task is needed. If you would like to encode data to decode later, try
   * `abi.encode`.
   */
  function checkTask(bytes calldata checkData) external returns (bool taskNeeded, bytes memory performData);

  /**
   * @notice method that is actually executed by the automators, via the registry.
   * The data returned by the checkTask simulation will be passed into
   * this method to actually be executed.
   * @dev The input to this method should not be trusted, and the caller of the
   * method should not even be restricted to any single registry. Anyone should
   * be able call it, and the input should be validated, there is no guarantee
   * that the data passed in is the performData returned from checkTask. This
   * could happen due to malicious automators, racing automators, or simply a state
   * change while the performTask transaction is waiting for confirmation.
   * Always validate the data passed in.
   * @param performData is the data which was passed back from the checkData
   * simulation. If it is encoded, it can easily be decoded into other types by
   * calling `abi.decode`. This data should not be trusted, and should be
   * validated against the contract's current state.
   */
  function performTask(bytes calldata performData) external;
}

/**
 * THIS IS AN EXAMPLE CONTRACT THAT USES HARDCODED VALUES FOR CLARITY.
 * THIS IS AN EXAMPLE CONTRACT THAT USES UN-AUDITED CODE.
 * DO NOT USE THIS CODE IN PRODUCTION.
 */

contract SampleCompatible is IAutomateCompatible {
    /**
     * Public counter variable
     */
    uint public counter;
    address public owner;

    /**
     * Use an interval in seconds and a timestamp to slow execution of Upkeep
     */
    uint public interval;
    uint public lastTimeStamp;

    constructor() {
        interval = 3600;
        lastTimeStamp = block.timestamp;
        owner = msg.sender;

        counter = 0;
    }

    function checkTask(
        bytes calldata /* checkData */
    )
        external
        view
        override
        returns (bool upkeepNeeded, bytes memory /* performData */)
    {
        upkeepNeeded = (block.timestamp - lastTimeStamp) > interval;
        // We don't use the checkData in this example. The checkData is defined when the Upkeep was registered.
    }

    function performTask(bytes calldata /* performData */) external override {
        //We highly recommend revalidating the upkeep in the performUpkeep function
        if ((block.timestamp - lastTimeStamp) > interval) {
            lastTimeStamp = block.timestamp;
            counter = counter + 1;
        }
        // We don't use the performData in this example. The performData is generated by the Automation Node's call to your checkUpkeep function
    }

    function setInterval(uint256 _interval) external {
        require(msg.sender == owner);
        interval = _interval;
    }
}
```
    
Compile and deploy your own Automation Counter onto a supported Testnet (currently, BNB Smart Chain).

1. In the Remix example, select the **Compile** tab on the left and press the compile button. Make sure that your contract compiles without any errors. Note that the Warning messages in this example are acceptable and will not block the deployment.
2. Select the **Deploy** tab, set the **environment** to **Injected Provider — MetaMask**, confirm connecting to MetaMask, and deploy the AutomatedCounter.sol smart contract to Binance Smart Chain Testnet. When deploying the contract, specify the interval value; use a short value, e.g., 3s. This is the interval at which the `performTask()` function will be called.
   1. After deployment is complete, copy the address of the deployed contract. This address is required to register your Task.

We will now look at each function in a compatible contract in detail.

