/**
 * Created by mohankumar on 15/11/16.
 */
(function(W){
    W.notification =  W.notification ||  (function () {

           var notification = {

               initialize : function () {
                var modelObj,viewObj ;

                   modelObj = new this.model();
                   viewObj = new this.view(modelObj);
               },

               registerforCLick : function () {

               }

           }

            return notification;


        }());

})(window);