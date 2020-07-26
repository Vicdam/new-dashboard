// Main line chart
var myChart = document.getElementById('myChart').getContext('2d');

// Global Options
Chart.defaults.global.defaultFontFamily = 'Source Sans Pro';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#777';

var massPopChart = new Chart(myChart, {
  type: 'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Engagement',

      borderWidth: 2,
      borderColor: '#0075FF',
      hoverBorderWidth: 3,
      hoverBorderColor: '#0075FF',


      data: [
        80, 000,
        70, 000,
        60, 000,
        50, 000
      ],

    }]
  },
  options: {
    title: {
      display: false,
      text: 'Largest Cities In Massachusetts',
      fontSize: 25
    },
    legend: {
      display: false,
      position: 'right',
      labels: {
        fontColor: '#000'
      }
    },
    // layout: {
    //   padding: {
    //     left: 50,
    //     right: 0,
    //     bottom: 0,
    //     top: 0
    //   }
    // },
    tooltips: {
      enabled: true
    }
  }
});

// Pie chart 1
var pieChart1 = document.getElementById('pieChart1').getContext('2d');

var pieChart1 = new Chart(pieChart1, {
  type: 'doughnut', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
  data: {
    labels: ['Engagement'],
    datasets: [{
      label: 'Engagement',
      data: [
        64,
        36
      ],

      backgroundColor: [
        '#F58B11',
        '#f0f7ff',
      ],

      // borderWidth: 2,
      // borderColor: '#0075FF',
      // hoverBorderWidth: 3,
      // hoverBorderColor: '#0075FF'
    }]
  },
  options: {
    title: {
      display: false,
      text: '',
      fontSize: 25
    },
    legend: {
      display: false,
      position: 'right',
      labels: {
        fontColor: ''
      }
    },
    layout: {
      padding: {
        left: 50,
        right: 0,
        bottom: 0,
        top: 0
      }
    },
    tooltips: {
      enabled: false
    }
  }
});

// Pie chart 2
var pieChart2 = document.getElementById('pieChart2').getContext('2d');

var pieChart2 = new Chart(pieChart2, {
  type: 'doughnut', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
  data: {
    labels: ['Engagement'],
    datasets: [{
      label: 'Engagement',
      data: [
        64,
        36
      ],

      backgroundColor: [
        '#F58B11',
        '#f0f7ff',
      ],

      // borderWidth: 2,
      // borderColor: '#0075FF',
      // hoverBorderWidth: 3,
      // hoverBorderColor: '#0075FF'
    }]
  },
  options: {
    title: {
      display: false,
      text: '',
      fontSize: 25
    },
    legend: {
      display: false,
      position: 'right',
      labels: {
        fontColor: ''
      }
    },
    layout: {
      padding: {
        left: 50,
        right: 0,
        bottom: 0,
        top: 0
      }
    },
    tooltips: {
      enabled: false
    }
  }
});

// Pie chart 3
var pieChart3 = document.getElementById('pieChart3').getContext('2d');

var pieChart3 = new Chart(pieChart3, {
  type: 'doughnut', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
  data: {
    labels: ['Engagement'],
    datasets: [{
      label: 'Engagement',
      data: [
        64,
        36
      ],

      backgroundColor: [
        '#F58B11',
        '#f0f7ff',
      ],

      // borderWidth: 2,
      // borderColor: '#0075FF',
      // hoverBorderWidth: 3,
      // hoverBorderColor: '#0075FF'
    }]
  },
  options: {
    title: {
      display: false,
      text: '',
      fontSize: 25
    },
    legend: {
      display: false,
      position: 'right',
      labels: {
        fontColor: ''
      }
    },
    // layout: {
    //   padding: {
    //     left: 50,
    //     right: 0,
    //     bottom: 0,
    //     top: 0
    //   }
    // },
    tooltips: {
      enabled: false
    }
  }
});

// Pie Chart 4
var pieChart4 = document.getElementById('pieChart4').getContext('2d');

var pieChart4 = new Chart(pieChart4, {
  type: 'doughnut', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
  data: {
    labels: ['Engagement'],
    datasets: [{
      label: 'Engagement',
      data: [
        100
      ],

      backgroundColor: [
        '#f0f7ff',
      ],

      // borderWidth: 2,
      borderColor: '#0075FF',
      // hoverBorderWidth: 3,
      // hoverBorderColor: '#0075FF'
    }]
  },
  options: {
    title: {
      display: false,
      text: '',
      fontSize: 25
    },
    legend: {
      display: false,
      position: 'right',
      labels: {
        fontColor: ''
      }
    },
    // layout: {
    //   padding: {
    //     left: 50,
    //     right: 0,
    //     bottom: 0,
    //     top: 0
    //   }
    // },
    tooltips: {
      enabled: true
    }
  }
});

// Pie Chart 5
var pieChart5 = document.getElementById('pieChart5').getContext('2d');

var pieChart5 = new Chart(pieChart5, {
  type: 'doughnut', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
  data: {
    labels: ['Engagement'],
    datasets: [{
      label: 'Engagement',
      data: [
        100
      ],

      backgroundColor: [
        '#f0f7ff',
      ],

      // borderWidth: 2,
      borderColor: '#0075FF',
      // hoverBorderWidth: 3,
      // hoverBorderColor: '#0075FF'
    }]
  },
  options: {
    title: {
      display: false,
      text: '',
      fontSize: 25
    },
    legend: {
      display: false,
      position: 'right',
      labels: {
        fontColor: ''
      }
    },
    // layout: {
    //   padding: {
    //     left: 50,
    //     right: 0,
    //     bottom: 0,
    //     top: 0
    //   }
    // },
    tooltips: {
      enabled: true
    }
  }
});

// Pie Chart 6
var pieChart6 = document.getElementById('pieChart6').getContext('2d');

var pieChart6 = new Chart(pieChart6, {
  type: 'doughnut', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
  data: {
    labels: ['Engagement'],
    datasets: [{
      label: 'Engagement',
      data: [
        100
      ],

      backgroundColor: [
        '#f0f7ff',
      ],

      // borderWidth: 2,
      borderColor: '#0075FF',
      // hoverBorderWidth: 3,
      // hoverBorderColor: '#0075FF'
    }]
  },
  options: {
    title: {
      display: false,
      text: '',
      fontSize: 25
    },
    legend: {
      display: false,
      position: 'right',
      labels: {
        fontColor: ''
      }
    },
    // layout: {
    //   padding: {
    //     left: 50,
    //     right: 0,
    //     bottom: 0,
    //     top: 0
    //   }
    // },
    tooltips: {
      enabled: true
    }
  }
});