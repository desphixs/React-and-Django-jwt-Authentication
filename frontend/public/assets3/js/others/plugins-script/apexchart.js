var options = {
    colors: ["#B2DDFF"],
    series: [{
        name: "Inflation",
        data: [50, 30, 40, 60, 70, 35, 52, 46, 66, 48, 30, 40],
    }, ],
    chart: {
        height: "450",
        type: "bar",
        toolbar: {
            show: false,
        },
    },
    plotOptions: {
        bar: {
            borderRadius: 8,
            dataLabels: {
                position: "bottom", // top, center, bottom
            },
        },
    },
    dataLabels: {
        enabled: false,
        formatter: function(val) {
            return val + "%";
        },
        offsetY: -20,
        style: {
            fontSize: "12px",
            colors: ["#304758"],
        },
    },

    xaxis: {
        categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        position: "bottom",
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },

        crosshairs: {
            fill: {
                type: "gradient",
                gradient: {
                    colorFrom: "#D8E3F0",
                    colorTo: "#3b82f6",
                    stops: [0, 100],
                    opacityFrom: 0.4,
                    opacityTo: 1,
                },
            },
        },
        tooltip: {
            enabled: true,
        },
    },
    yaxis: {
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
        labels: {
            show: false,
            formatter: function(val) {
                return val + "%";
            },
        },
    },
};
var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();