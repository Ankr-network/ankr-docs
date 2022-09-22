Parlia is a BFT-like consensus where only one validator produces a block and to be sure of the correctness of this operations we must wait for the confirmation time, usually its 2/3*N+1, where N is active validators (15 blocks for the current configuration). It means that to prove one block we must upload at least 15 blocks to the blockchain. 

BLS cryptography with Parlia’s fast-finality can solve this problem because in this case we can collect one aggregated signature and send only this aggregated signature in BNB Smart Chain, but here we must know the BLS public keys of each validator. 

Currently, BLS cryptography is merged to the official Geth repository, but it's not supported by BNB Smart Chain yet, so it might take some time to apply these changes to the Parlia consensus engine. Also, it’s not strictly required to use BLS, Geth has the support of the BN256 curve since Byzantium fork can be used as a replacement for BLS aggregated signatures.

Here, we have the next solutions:

* Break compatibility with Parlia and implement fast-finality in the BNB Sidechain version of Parlia using the BN256 curve.
* Wait for the BNB Smart Chain’s version of fast-finality and for BLS support.

For now, let's assume that fast-finality is an optional solution for the BNB Sidechain since we have a lot of moving parts here.