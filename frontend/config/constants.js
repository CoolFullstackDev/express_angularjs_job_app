(function(){
    'use strict';

    //var siteURL = '//taskoli.com'
	//var baseURL = "//taskoli.com/api";
    var siteURL = '/'
	var baseURL = "/api";

    var app = angular.module('taskoli')
        .constant({ 
            'apiURL': baseURL,
            'siteURL': siteURL,
            'googleMapKey': 'AIzaSyCJSBa-9qTRtEX3IVQ_eg7UCCGQPuFJxbc'
        }).constant('uiDatetimePickerConfig', {
            dateFormat: 'yyyy-MM-dd HH:mm',
            defaultTime: '00:00:00',
            html5Types: {
                date: 'yyyy-MM-dd',
                'datetime-local': 'yyyy-MM-ddTHH:mm:ss.sss',
                'month': 'yyyy-MM'
            },
            initialPicker: 'date',
            reOpenDefault: false,
            enableDate: true,
            enableTime: true,
            buttonBar: {
                show: true,
                now: {
                    show: true,
                    text: 'Now',
                    cls: 'btn-sm btn-default'
                },
                today: {
                    show: true,
                    text: 'Today',
                    cls: 'btn-sm btn-default'
                },
                clear: {
                    show: true,
                    text: 'Clear',
                    cls: 'btn-sm btn-default'
                },
                date: {
                    show: true,
                    text: 'Date',
                    cls: 'btn-sm btn-default'
                },
                time: {
                    show: true,
                    text: 'Time',
                    cls: 'btn-sm btn-default'
                },
                close: {
                    show: true,
                    text: 'Close',
                    cls: 'btn-sm btn-default'
                }
        },
        closeOnDateSelection: true,
        closeOnTimeNow: true,
        appendToBody: false,
        altInputFormats: [],
        ngModelOptions: {},
        saveAs: false,
        readAs: false
    })
})();