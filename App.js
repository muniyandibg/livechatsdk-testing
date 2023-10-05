import React, {useEffect} from 'react';
import {Pressable, View, Text} from 'react-native';
import {Livechat2Api} from 'react-native-livechatav/sig/livechat2api';
import * as config from './config';

// let liveChatClient = new Livechat2Api(config.webSocketUrl, config);

let livechatapi = new Livechat2Api('wss://calabrio.tetherfi.cloud:9443');
livechatapi.setUserAuth(
  'test',
  'eyJhbGciOiJIUzUxMiJ9.eyJjaGFubmVsIjoiQ0hBVCIsInNlc3Npb25JZCI6ImFrZHNqYWxza2FTIiwiZW52IjoiREVWIiwicGFnZUlkIjoiQUNDT1VOVFMiLCJtb2JpbGVBdXRoRmxhZyI6InRydWUiLCJjdXN0b21lck5hbWUiOiJ0ZXRoZXJmaSIsIm9yZ0lkIjoiMSIsInNraWxsIjoiQUNDT1VOVFMiLCJvcmdhbml6YXRpb24iOiJ0ZXRoZXJmaSIsImN1c3RvbWVySWQiOiI1NDY3NTEzMDUxIiwiZXhwIjo3NjIxNjUyMTQsImlhdCI6MTY1NDg2MzgzOCwianRpIjoiMmE3NTk3NDUtYjYzNi00ZWQwLThhZWUtMGU3NjNlZGNkZDZlIn0.BBcf-7MzgP40DbD5yibQSrWAqDT_rJk3FMDiMWDs8B9jSmqSysJhn526B6ypMZ_fR48ocdICxbj_v0LnTocgTw&sessionId=3a600342-a7a3-4c66-bbd3-f67de5d7096f&authType=cloud',
);
livechatapi.start({name: 'test', address: 'india'}, true);

export default App = () => {
  const messageSuccess = status => {
    console.log('success', status);
  };
  const sendMessage = () => {
    livechatapi.open();
    console.log('send message called');
    livechatapi.sendUserMessage(
      'test123',
      {sid: 'QPlpT1ee9umHE14pgZKl5J:One_00412', interaction: '51001'},
      (onSentCb = status => messageSuccess(status)),
      {
        sessionId: 'QPlpT1ee9umHE14pgZKl5J:One_00412',
        sid: 'QPlpT1ee9umHE14pgZKl5J:One_00412',
      },
    );
  };

  //   const getConversations = () => {
  //     console.log('get conversations');
  //     liveChatClient.open();
  //     let userId = '2c92809c71d5213c0172072e7d490027';
  //     /*
  // Sample of calling getUserConversation method defined in conversations
  // api. Most of the api's support ES6 Promises and details are
  // documented in each api
  // */
  //     liveChatClient.api.conversations
  //       .getUserConversations(userId)
  //       .then(conversationData => {
  //         console.log(JSON.stringify(conversationData));
  //       })
  //       .catch(ex => {
  //         console.error(ex);
  //       });
  //   };
  return (
    <View>
      <Pressable onPress={() => sendMessage()}>
        <Text>Send Message</Text>
      </Pressable>

      {/* <Pressable onPress={() => getConversations()}>
        <Text>Get Conversations</Text>
      </Pressable> */}
    </View>
  );
};
