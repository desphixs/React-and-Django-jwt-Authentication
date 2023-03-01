 'use strict';

 $(document).ready(function() {
     if ($('#review-chart').length > 0) {
         var options = {
             series: [{
                 name: 'Series 1',
                 data: [80, 50, 30, 40, 100, 20],
             }, {
                 name: 'Series 2',
                 data: [20, 30, 40, 80, 20, 80],
             }, {
                 name: 'Series 3',
                 data: [44, 76, 78, 13, 43, 10],
             }],
             colors: ['#666666', '#C10037', '#666666'],
             chart: {
                 height: 350,
                 type: 'radar',
                 dropShadow: {
                     enabled: true,
                     blur: 1,
                     left: 1,
                     top: 1
                 },
                 dataLabels: {
                     enabled: false
                 },
                 animations: {
                     enabled: true,
                     easing: 'easeinout',
                     speed: 800,
                     animateGradually: {
                         enabled: true,
                         delay: 150
                     },
                     dynamicAnimation: {
                         enabled: true,
                         speed: 350
                     }
                 },
                 toolbar: {
                     show: false
                 }

             },
             legend: {
                 show: false,
             },
             stroke: {
                 width: 2
             },
             fill: {
                 opacity: 0.1
             },
             markers: {
                 size: 0
             },
             xaxis: {
                 categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Fridau']
             }
         };

         var chart = new ApexCharts(document.querySelector("#review-chart"), options);
         chart.render();

     }

 });