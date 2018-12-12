(function () {
    'usestrict';

    angular.module('taskoli').config(Messages);

    Messages.$inject = ['$stateProvider', '$urlRouterProvider'];

    function Messages($stateProvider, $urlRouterProvider) {
        // States
        $stateProvider
            .state('messages', {
                parent: 'app',
                url: '/messages',
                views: {
                    'content@': {
                        templateUrl: '/frontend/messages/view/messages.html',
                         controller: 'MessagesController'
                    }
                },
                data: {
                    roles: ['LOGGEDIN']
                },
                resolve: {
                }
            })
            .state('message', {
                parent: 'messages',
                url: '/:id',
                data: {
                    roles: ['LOGGEDIN']
                },
                 views: {
                    'message@messages': {
                        templateUrl: '/frontend/messages/view/message.html',
                        controller: 'MessageController'
                    }
                },
                resolve: {
                     MessageData: ['MessagesService', '$stateParams', '$timeout', function(MessagesService, $stateParams, $timeout) {
                        var model= {};                        
                        return MessagesService.chat_conversation($stateParams.id).then(function (res) {
                            console.log(res)
                            model.task_info = res.data['task_info'][0];
                            model.chat_conversation = res.data['task_chat'];
                            return model;
                        });
                    }] 
                }
            })
    }
})();