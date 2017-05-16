/**
 * Created by dxs on 2015-07-14.
 */

var doughnutData = [
    {
        value: 80,
        color:"#FED136",
        highlight: "#FF5A5E",
        label: "Red"
    },
    {
        value: 20,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    }
];
var doughnutData1 = [
    {
        value: 80,
        color:"#FED136",
        highlight: "#FF5A5E",
        label: "Red"
    },
    {
        value: 20,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    }
];
var doughnutData2 = [
    {
        value: 80,
        color:"#FED136",
        highlight: "#FF5A5E",
        label: "Red"
    },
    {
        value: 20,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    }
];
var doughnutData3 = [
    {
        value: 70,
        color:"#FED136",
        highlight: "#FF5A5E",
        label: "Red"
    },
    {
        value: 30,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    }
];var doughnutData4 = [
    {
        value: 70,
        color:"#FED136",
        highlight: "#FF5A5E",
        label: "Red"
    },
    {
        value: 30,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    }
];
var doughnutData5 = [
    {
        value: 60,
        color:"#FED136",
        highlight: "#FF5A5E",
        label: "Red"
    },
    {
        value: 40,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    }
];
var doughnutData6 = [
    {
        value: 60,
        color:"#FED136",
        highlight: "#FF5A5E",
        label: "Red"
    },
    {
        value: 40,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    }
];
var doughnutData7 = [
    {
        value: 50,
        color:"#FED136",
        highlight: "#FF5A5E",
        label: "Red"
    },
    {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    }
];

var doughnutData8 = [
    {
        value: 20,
        color:"#FED136",
        highlight: "#FF5A5E",
        label: "Red"
    },
    {
        value: 80,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    }
];

function showDoughnutChart(){
  var ctx = document.getElementById("chart-area").getContext("2d");
    window.myDoughnut = new Chart(ctx).Doughnut(doughnutData, {responsive : true});

    var ctx = document.getElementById("chart-area1").getContext("2d");
    window.myDoughnut = new Chart(ctx).Doughnut(doughnutData1, {responsive : true});

    var ctx = document.getElementById("chart-area2").getContext("2d");
    window.myDoughnut = new Chart(ctx).Doughnut(doughnutData2, {responsive : false});

    var ctx = document.getElementById("chart-area3").getContext("2d");
    window.myDoughnut = new Chart(ctx).Doughnut(doughnutData3, {responsive : true});
    var ctx = document.getElementById("chart-area4").getContext("2d");
    window.myDoughnut = new Chart(ctx).Doughnut(doughnutData4, {responsive : true});

    var ctx = document.getElementById("chart-area5").getContext("2d");
    window.myDoughnut = new Chart(ctx).Doughnut(doughnutData5, {responsive : true});

    var ctx = document.getElementById("chart-area6").getContext("2d");
    window.myDoughnut = new Chart(ctx).Doughnut(doughnutData6, {responsive : false});

    var ctx = document.getElementById("chart-area7").getContext("2d");
    window.myDoughnut = new Chart(ctx).Doughnut(doughnutData7, {responsive : true});
    var ctx = document.getElementById("chart-area8").getContext("2d");
    window.myDoughnut = new Chart(ctx).Doughnut(doughnutData8, {responsive : true});
};


$(document).ready(function(){
    $("#services").mouseenter(function(){
        showDoughnutChart();
    });
});

