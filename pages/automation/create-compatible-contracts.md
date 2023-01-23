import { Callout } from "components";

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
     * Use an interval in seconds and a timestamp to slow execution of Task
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
        returns (bool taskNeeded, bytes memory /* performData */)
    {
        taskNeeded = (block.timestamp - lastTimeStamp) > interval;
        // We don't use the checkData in this example. The checkData is defined when the Task was registered.
    }

    function performTask(bytes calldata /* performData */) external override {
        //We highly recommend revalidating the task in the performTask() function
        if ((block.timestamp - lastTimeStamp) > interval) {
            lastTimeStamp = block.timestamp;
            counter = counter + 1;
        }
        // We don't use the performData in this example. The performData is generated by the Automation Node's call to your checkTask() function
    }

    function setInterval(uint256 _interval) external {
        require(msg.sender == owner);
        interval = _interval;
    }
}
```

[**Try out the example contract in Remix**](https://remix.ethereum.org/#url=https://ankr.com/docs/automation/AutomatedCounter.sol&optimize=false&runs=200&evmVersion=null&version=soljson-v0.8.15+commit.e14f2714.js)

    
Compile and deploy your own Automation Counter onto a supported Testnet (currently, BNB Smart Chain).

1. In the Remix example, select the **Compile** tab on the left and press the **Compile** button. Make sure the compilation goes without errors; warnings in this example are acceptable and will not block the deployment.
2. Select the **Deploy** tab, set the **environment** to **Injected Provider — MetaMask**, confirm connecting to MetaMask, and **deploy** the AutomatedCounter.sol smart contract to Binance Smart Chain Testnet. When deploying the contract, specify the interval value; use a short value, e.g., 3s. This is the interval at which the `performTask()` function will be called. 
3. After deployment is complete, copy the address of the deployed contract and use it to create and register a Task.

Let's now look closer at the functions of the contract.

### Functions

There are two main functions, which are inherited from the `IAutomateCompatible` interface:
* `checkTask(bytes calldata checkData)` that `returns (bool taskNeeded, bytes memory performData)`;
* `performTask(bytes calldata performData)`;
   
#### `checkTask()`

Repeatedly checks if the `performTask()` should be executed.
`checkTask()` executes off-chain.

##### Parameters

* `checkData` (bytes) —  information passed at the Task registration phase to execute different code paths. For example, to check the balance of a specific address, set the `checkData` to abi encode of the address. `checkData` can be empty (0x).  

##### Returns
* `taskNeeded` (bool) — triggers an on-chain `performTask()` call when `true`.  
* `performData` (bytes) —  passed to the `performTask()` function as `performData`, which allows you to perform complex and gas intensive calculations as a simulation off-chain and only pass the needed data on-chain. Use `abi.encode` for encoding/decoding.

You can create a highly flexible off-chain computation infrastructure that can perform logic on-chain by using `checkData` and `performData`. Both computations are entirely programmable. 
 
#### `performTask()`
When `checkTask()` returns `taskNeeded == true`, the Automation broadcasts a transaction to the blockchain to execute your `performTask()` function on-chain with `performData` as an input.

<Callout type="info">
During the Task registration, you have to specify the max gas limit for the contract.
You can learn the best gas value for your Task by simulating the `performTask()` function and adding enough overhead to take into account increases that might happen due to changes in `performData` or on-chain data. 
The limit you set cannot exceed the `callGasLimit` in the configuration of the Ankr Automation registry.
</Callout>

##### Parameters
* `performData` (bytes) —  passed by `checkTask()` to the `performTask()` function. Use `abi.encode` for encoding/decoding.
  The data should always be validated against the current state of your deployed contract. 
Before using `performData` on-chain in `performTask()` and paying gas fees, use it off-chain in `checkTask()` to run extensive computations such as a high number of addresses that you are validating for conditions or identifying the subset of states that must be updated.

## Best practices

### Revalidate performTask()
We recommend that you revalidate the conditions and data in performTask() before work is performed. 
By default, performTask() is external and thus any party can call it, so revalidation is recommended. 
If you send data from your checkTask() to your performTask() and this data drives a critical function, please ensure you put adequate checks in place.

### Perform only when conditions are met
Some actions must be performed only when specific conditions are met. 
Check all of the preconditions within performTask() to ensure that state change occurs only when necessary.

In this pattern, it is undesirable for the state change to occur until the next time the Task is checked by the network and the conditions are met. 
It is a best practice to stop any state change or effects by performing the same checks or similar checks that you use in checkTask(). 
These checks validate the conditions before doing the work.

For example, if you have a contract where you create a timer in checkTask() that is designed to start a game at a specific time, validate the condition to ensure third-party calls to your performTask() function do not start the game at a different time.

### Perform only when data is verified
Some actions must be performed using data you intend to use. Revalidate that the performData is allowed before execution.

For example, if you have a performTask() that funds a wallet and the address of the wallet is received via the performData parameter, ensure you have a list of permissable addresses to compare against to prevent third-party calling your function to send money to their address.

### When performing is not harmful
Sometimes actions must be performed when conditions are met, but performing actions when conditions are not met is still acceptable. 
Condition checks within performTask() might not be required, but it can still be a good practice to short circuit expensive and unnecessary on-chain processing when it is not required.

It might be desirable to call performTask() when the checkTask() conditions haven’t yet been tested by Ankr Automation, so any specific checks that you perform are entirely use case specific.

### Test your contract
As with all smart contract testing, it is important to test the boundaries of your smart contract in order to ensure it operates as intended. 
Similarly, it is important to make sure the compatible contract operates within the parameters of the TaskRegistry.

Test all of your mission-critical contracts, and stress-test the contract to confirm the performance and correct operation of your use case under load and adversarial conditions. 
The Ankr Automation Network will continue to operate under stress, but so should your contract.

## Next read 
* [Automation overview](/automation/overview/)
* [Time-based automation](/automation/time-based-automation/)
* [Custom logic automation](/automation/custom-logic-automation/)
* [Manage automation tasks](/automation/manage-tasks)








