/**
 * Created by mohankumar on 15/11/16.
 */
(function (W) {
    W.notification.utility = W.notification.utility || {
           name : ["aaa","bbb","ccc","ddd","eee"],
            message : ["how are you?","i am fine","javascript coding","validating"],
           generateRandomData :  function () {
               var data = {
                   name : this.name[parseInt(Math.random(0,this.name.length-1)*10)] || "default",
                   message : this.message[parseInt(Math.random(0,this.message.length -1)*10)] || "default message",
               }

               return data;

           }

        };

})(window);