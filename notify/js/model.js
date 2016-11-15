/**
 * Created by mohankumar on 15/11/16.
 */
(function (W) {
    W.notification.model = W.notification.model || function () {
            var data = [], timmer,
                utility = W.notification.utility, index = 0, read = 0;

            var notify = function (data) {

                if (index > read) {
                    var event = new CustomEvent('notify', {'number': index - read});
                    W.dispatchEvent(event);
                }

            };

            this.getNotifyData = function () {

                var unreadData = data.splice(read, index);
                read = data.length;
                return unreadData;

            };

            this.initialize = function () {

                timmer = setInterval(this.getData.bind(this), 5000);

            };

            this.observeData = function () {

            };

            this.getData = function () {

                var data = utility.generateRandomData();
                this.setData(data);

            };

            this.setData = function (message) {

                data.push(message);
                index++;
                notify();

            };

            this.setAsRead = function () {

            }

            this.initialize();

        };

})(window);