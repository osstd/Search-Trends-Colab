async function fetchCSVData(url) {
  const response = await fetch(url);
  const data = await response.text();
  return data;
}

async function plotLine(data, title, xtitle, ytitle1, ytitle2, num) {
  const pdf = Plotly.d3.csv.parse(data);

  const line = {
    data: [
      {
        x: pdf.map((row) => new Date(row.MONTH)),
        y: pdf.map((row) => row.TSLA_WEB_SEARCH),
        type: "line",
        line: {
          color: "#E6232E",
          width: 2,
        },
        name: "",
        xaxis: "x",
        yaxis: "y",
      },
      {
        x: pdf.map((row) => new Date(row.MONTH)),
        y: pdf.map((row) => row.TSLA_USD_CLOSE),
        type: "line",

        line: { color: "skyblue", width: 2 },
        name: "",
        xaxis: "x",
        yaxis: "y2",
      },
    ],
    layout: {
      resolution: { dpi: 120 },
      showlegend: false,
      title: {
        text: `${title}`,
        font: {
          size: 20,
        },
      },
      xaxis: {
        title: `${xtitle}`,
        showgrid: false,
        tickfont: {
          size: 12,
        },
        tickangle: 45,
        tickcolor: "black",
        type: "date",
        dtick: "M12",
        showline: true,
        linewidth: 1,
        linecolor: "black",
        mirror: true,
      },
      yaxis1: {
        title: `${ytitle1}`,
        showgrid: false,
        color: "#E6232E",
        tickfont: {
          size: 12,
        },
        showline: true,
        linewidth: 1,
        linecolor: "black",
      },
      yaxis2: {
        title: `${ytitle2}`,
        showgrid: false,
        color: "skyblue",
        fontsize: 12,
        overlaying: "y",
        side: "right",
        range: [0, 600],
        showline: true,
        linewidth: 1,
        linecolor: "black",
      },
      font: {
        family: "Verdana",
      },
      autosize: true,
    },
    config: {
      responsive: true,
    },
  };

  const lineElement = document.getElementById(`chart${num}`);

  Plotly.plot(lineElement, line.data, line.layout, line.config);
}
async function plotBtc(data1, data2, title, xtitle, ytitle1, ytitle2, num) {
  const pdfS = Plotly.d3.csv.parse(data1);
  const pdfP = Plotly.d3.csv.parse(data2);

  const line = {
    data: [
      {
        x: pdfP.map((row) => new Date(row.DATE)),
        y: pdfP.map((row) => row.CLOSE),
        type: "line",
        line: {
          color: "#E6232E",
          width: 2,
          dash: "dashdot",
        },
        name: "",
        xaxis: "x",
        yaxis: "y",
      },
      {
        x: pdfS.map((row) => new Date(row.MONTH)),
        y: pdfS.map((row) => row.BTC_NEWS_SEARCH),
        type: "line",

        line: { color: "skyblue", width: 2, dash: "dash" },
        name: "",
        xaxis: "x",
        yaxis: "y2",
      },
    ],
    layout: {
      resolution: { dpi: 300 },
      showlegend: false,
      title: {
        text: `${title}`,
        font: {
          size: 20,
        },
      },
      xaxis: {
        title: `${xtitle}`,
        showgrid: false,
        tickfont: {
          size: 12,
        },
        tickangle: 45,
        tickcolor: "black",
        type: "date",
        dtick: "M12",
        showline: true,
        linewidth: 1,
        linecolor: "black",
        mirror: true,
      },
      yaxis1: {
        title: `${ytitle1}`,
        showgrid: false,
        color: "#E6232E",
        tickfont: {
          size: 12,
        },
        range: [0, 15000],
        showline: true,
        linewidth: 1,
        linecolor: "black",
      },
      yaxis2: {
        title: `${ytitle2}`,
        showgrid: false,
        color: "skyblue",
        fontsize: 12,
        overlaying: "y",
        side: "right",
        range: [0, 100],
        showline: true,
        linewidth: 1,
        linecolor: "black",
      },
      font: {
        family: "Verdana",
      },
      autosize: true,
    },
    config: {
      responsive: true,
    },
  };

  const lineElement = document.getElementById(`chart${num}`);

  Plotly.plot(lineElement, line.data, line.layout, line.config);
}
async function plotUe(
  data1,
  data2,
  title,
  xtitle,
  ytitle1,
  ytitle2,
  y1max,
  y2max,
  num
) {
  const pdf = Plotly.d3.csv.parse(data1);
  let date;
  if (data2) {
    date = Plotly.d3.csv.parse(data2);
  } else {
    date = Plotly.d3.csv.parse(data1);
  }

  const months = date.map((row) => new Date(row.MONTH));

  const line = {
    data: [
      {
        x: months,
        y: pdf.map((row) => row.UE_BENEFITS_WEB_SEARCH),
        type: "line",
        line: {
          color: "purple",
          width: 2,
          dash: "dash",
        },
        name: "",
        xaxis: "x",
        yaxis: "y",
      },
      {
        x: months,
        y: pdf.map((row) => row.UNRATE),
        type: "line",

        line: { color: "skyblue", width: 2 },
        name: "",
        xaxis: "x",
        yaxis: "y2",
      },
    ],
    layout: {
      resolution: { dpi: 120 },
      showlegend: false,
      title: {
        text: `${title}`,
        font: {
          size: 20,
        },
      },
      xaxis: {
        title: `${xtitle}`,
        type: "date",
        dtick: "M12",
        showgrid: true,
        tickfont: {
          size: 12,
        },
        tickangle: 45,
        tickcolor: "black",
        showline: true,
        linewidth: 1,
        linecolor: "black",
        mirror: true,
      },
      yaxis1: {
        title: `${ytitle1}`,
        showgrid: true,
        color: "purple",
        tickfont: {
          size: 12,
        },
        showline: true,
        linewidth: 1,
        linecolor: "black",
        range: [0, y1max],
      },
      yaxis2: {
        title: `${ytitle2}`,
        showgrid: false,
        color: "skyblue",
        fontsize: 12,
        overlaying: "y",
        side: "right",
        range: [3, `${y2max}`],
        showline: true,
        linewidth: 1,
        linecolor: "black",
      },
      plot_bgcolor: "rgba(0, 0, 0, 0)",
      paper_bgcolor: "rgba(0, 0, 0, 0)",
      font: {
        family: "Verdana",
      },
      autosize: true,
    },
    config: {
      responsive: true,
    },
  };

  const lineElement = document.getElementById(`chart${num}`);

  Plotly.plot(lineElement, line.data, line.layout, line.config);
}

async function main() {
  try {
    const pivotedData = await fetchCSVData(
      "static/assets/csv/TESLA Search Trend vs Price.csv"
    );
    const bTcS = await fetchCSVData(
      "static/assets/csv/Bitcoin Search Trend.csv"
    );
    const bTcP = await fetchCSVData(
      "static/assets/csv/Daily Bitcoin Price.csv"
    );
    const uE = await fetchCSVData(
      "static/assets/csv/UE Benefits Search vs UE Rate 2004-19.csv"
    );
    const uEw6 = await fetchCSVData(
      "static/assets/csv/UE Benefits Search vs UE Rate 2004-19 w6.csv"
    );
    const uE20 = await fetchCSVData(
      "static/assets/csv/UE Benefits Search vs UE Rate 2004-20.csv"
    );

    // Run plotting functions concurrently
    await Promise.all([
      plotLine(
        pivotedData,
        "Tesla Web Search vs Price",
        "Month",
        "Search Trend",
        "TSLA Stock Price",
        1
      ),
      plotBtc(
        bTcS,
        bTcP,
        "Bitcoin News Search vs Resampled Price",
        "Month",
        "BTC Price",
        "Search Trend",
        2
      ),
      plotUe(
        uE,
        false,
        'Monthly Search of "Unemployment Benefits" <br>in the U.S. vs the U/E Rate',
        "Month",
        "Search Trend",
        "FRED U/E Rate",
        120,
        11,
        3
      ),
      plotUe(
        uEw6,
        uE,
        'Rolling Monthly "Unemployment Benefits" <br>Web Search vs UNRATE',
        "Month",
        "Search Trend",
        "FRED U/E Rate",
        100,
        11,
        4
      ),
      plotUe(
        uE20,
        false,
        'Monthly US "Unemployment Benefits" <br>Web Search vs UNRATE incl 2020',
        "Month",
        "Search Trend",
        "FRED U/E Rate",
        120,
        16,
        5
      ),
    ]);
  } catch (error) {
    console.error("Error loading or plotting data:", error);
  }
}

document.addEventListener("DOMContentLoaded", main);
