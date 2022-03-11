import {
  Client,
  AccountId,
  PrivateKey,
  TopicMessageQuery,
  TopicCreateTransaction,
  TopicMessageSubmitTransaction,
  AccountCreateTransaction,
  Hbar,
  AccountBalanceQuery,
  TransferTransaction,
  AccountInfoQuery,
  TopicInfoQuery,
  FileContentsQuery,
  FileId,
} from "@hashgraph/sdk";

const myAccountId = AccountId.fromString(process.env.REACT_APP_ACCOUNT_ID);
const myPrivateKey = PrivateKey.fromString(process.env.REACT_APP_PRIVATE_KEY);
if (myAccountId == null || myPrivateKey == null) {
  throw new Error(
    "Environment variables myAccountId and myPrivateKey must be present"
  );
}

export const client = Client.forTestnet();

client.setOperator(myAccountId, myPrivateKey);

//! This Is The Topic Method

export const createAndGetTopicId = async () => {
  //Create a new topic
  const transaction = new TopicCreateTransaction();
  const txResponse = await transaction.execute(client);
  //Grab the newly generated topic ID
  let receipt = await txResponse.getReceipt(client);
  let topicId = receipt.topicId;

  return topicId;
};

// export const topicHandler = async () => {

//   // Wait 5 seconds between consensus topic creation and subscription creation
//   await new Promise((resolve) => setTimeout(resolve, 5000));

//   // try {
//   //   new TopicMessageQuery()
//   //     .setTopicId(10)
//   //     .setErrorHandler()
//   //     .subscribe(client, null, (message) => {
//   //       let messageAsString = Buffer.from(message.contents, "utf8").toString();
//   //       console.log(
//   //         `${message.consensusTimestamp.toDate()} Received: ${messageAsString}`
//   //       );
//   //     });
//   // } catch (error) {
//   //   console.log(error);
//   // }
//   console.log(client._mirrorNetwork);
//   // Send one message

//   const sendResponse = await new TopicMessageSubmitTransaction()
//     .setTopicId(topicId)
//     .setMessage("HI");

//   const transactionId = sendResponse.freezeWith(client).transactionId;
//   console.log(transactionId);
//   console.log(sendResponse.message);

  

//   return {
//     topicId:topicId
//   }
// };

export const info = async () => {
  console.log(
    await new AccountInfoQuery().setAccountId(myAccountId).execute(client)
  );
};
