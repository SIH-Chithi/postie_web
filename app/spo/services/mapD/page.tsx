"use client";
// pages/index.js
import { useEffect, useState } from "react";
import * as d3 from "d3";

const IndexPage = () => {
  const [stateData, setStateData] = useState([]);
  const [isTableVisible, setIsTableVisible] = useState(false); // State to toggle table visibility

  useEffect(() => {
    const width = 900;
    const height = 900;

    // Define response data
    const response = [
        {
            "latitude": 28.6353,
            "longitude": 77.225,
            "nsh_name": "nsh_delhi",
            "in": {
                "Andaman and Nicobar": 523,
                "Andhra Pradesh": 879,
                "Arunachal Pradesh": 345,
                "Assam": 732,
                "Bihar": 611,
                "Chandigarh": 458,
                "Chhattisgarh": 921,
                "Dādra and Nagar Haveli and Damān and Diu": 264,
                "Delhi": 815,
                "Goa": 390,
                "Gujarat": 672,
                "Himachal Pradesh": 492,
                "Haryana": 758,
                "Jharkhand": 639,
                "Jammu and Kashmir": 801,
                "Karnataka": 564,
                "Kerala": 743,
                "Ladakh": 199,
                "Lakshadweep": 280,
                "Maharashtra": 914,
                "Meghalaya": 341,
                "Manipur": 412,
                "Madhya Pradesh": 765,
                "Mizoram": 250,
                "Nagaland": 337,
                "Odisha": 684,
                "Punjab": 831,
                "Puducherry": 429,
                "Rajasthan": 752,
                "Sikkim": 184,
                "Telangana": 603,
                "Tamil Nadu": 821,
                "Tripura": 278,
                "Uttar Pradesh": 957,
                "Uttarakhand": 488,
                "West Bengal": 695
            },
            "out": {
                "Andaman and Nicobar": 523,
                "Andhra Pradesh": 879,
                "Arunachal Pradesh": 345,
                "Assam": 732,
                "Bihar": 611,
                "Chandigarh": 458,
                "Chhattisgarh": 921,
                "Dādra and Nagar Haveli and Damān and Diu": 264,
                "Delhi": 815,
                "Goa": 390,
                "Gujarat": 672,
                "Himachal Pradesh": 492,
                "Haryana": 758,
                "Jharkhand": 639,
                "Jammu and Kashmir": 801,
                "Karnataka": 564,
                "Kerala": 743,
                "Ladakh": 199,
                "Lakshadweep": 280,
                "Maharashtra": 914,
                "Meghalaya": 341,
                "Manipur": 412,
                "Madhya Pradesh": 765,
                "Mizoram": 250,
                "Nagaland": 337,
                "Odisha": 684,
                "Punjab": 831,
                "Puducherry": 429,
                "Rajasthan": 752,
                "Sikkim": 184,
                "Telangana": 603,
                "Tamil Nadu": 821,
                "Tripura": 278,
                "Uttar Pradesh": 957,
                "Uttarakhand": 488,
                "West Bengal": 695
            }
        },
        {
            "latitude": 30.29427,
            "longitude": 78.085197,
            "nsh_name": "nsh_Dheradun",
            "in": {
                "Andaman and Nicobar": 312,
                "Andhra Pradesh": 721,
                "Arunachal Pradesh": 432,
                "Assam": 689,
                "Bihar": 594,
                "Chandigarh": 387,
                "Chhattisgarh": 818,
                "Dādra and Nagar Haveli and Damān and Diu": 210,
                "Delhi": 750,
                "Goa": 300,
                "Gujarat": 600,
                "Himachal Pradesh": 431,
                "Haryana": 690,
                "Jharkhand": 572,
                "Jammu and Kashmir": 745,
                "Karnataka": 520,
                "Kerala": 678,
                "Ladakh": 180,
                "Lakshadweep": 260,
                "Maharashtra": 850,
                "Meghalaya": 315,
                "Manipur": 387,
                "Madhya Pradesh": 710,
                "Mizoram": 210,
                "Nagaland": 312,
                "Odisha": 632,
                "Punjab": 760,
                "Puducherry": 390,
                "Rajasthan": 712,
                "Sikkim": 174,
                "Telangana": 580,
                "Tamil Nadu": 791,
                "Tripura": 245,
                "Uttar Pradesh": 890,
                "Uttarakhand": 420,
                "West Bengal": 640
            },
            "out": {
                "Andaman and Nicobar": 312,
                "Andhra Pradesh": 721,
                "Arunachal Pradesh": 432,
                "Assam": 689,
                "Bihar": 594,
                "Chandigarh": 387,
                "Chhattisgarh": 818,
                "Dādra and Nagar Haveli and Damān and Diu": 210,
                "Delhi": 750,
                "Goa": 300,
                "Gujarat": 600,
                "Himachal Pradesh": 431,
                "Haryana": 690,
                "Jharkhand": 572,
                "Jammu and Kashmir": 745,
                "Karnataka": 520,
                "Kerala": 678,
                "Ladakh": 180,
                "Lakshadweep": 260,
                "Maharashtra": 850,
                "Meghalaya": 315,
                "Manipur": 387,
                "Madhya Pradesh": 710,
                "Mizoram": 210,
                "Nagaland": 312,
                "Odisha": 632,
                "Punjab": 760,
                "Puducherry": 390,
                "Rajasthan": 712,
                "Sikkim": 174,
                "Telangana": 580,
                "Tamil Nadu": 791,
                "Tripura": 245,
                "Uttar Pradesh": 890,
                "Uttarakhand": 420,
                "West Bengal": 640
            }
        },
        {
            "latitude": 13.08268,
            "longitude": 80.270721,
            "nsh_name": "nsh_Chennai",
            "in": {
                "Andaman and Nicobar": 523,
                "Andhra Pradesh": 879,
                "Arunachal Pradesh": 345,
                "Assam": 732,
                "Bihar": 611,
                "Chandigarh": 458,
                "Chhattisgarh": 921,
                "Dādra and Nagar Haveli and Damān and Diu": 264,
                "Delhi": 815,
                "Goa": 390,
                "Gujarat": 672,
                "Himachal Pradesh": 492,
                "Haryana": 758,
                "Jharkhand": 639,
                "Jammu and Kashmir": 801,
                "Karnataka": 564,
                "Kerala": 743,
                "Ladakh": 199,
                "Lakshadweep": 280,
                "Maharashtra": 914,
                "Meghalaya": 341,
                "Manipur": 412,
                "Madhya Pradesh": 765,
                "Mizoram": 250,
                "Nagaland": 337,
                "Odisha": 684,
                "Punjab": 831,
                "Puducherry": 429,
                "Rajasthan": 752,
                "Sikkim": 184,
                "Telangana": 603,
                "Tamil Nadu": 821,
                "Tripura": 278,
                "Uttar Pradesh": 957,
                "Uttarakhand": 488,
                "West Bengal": 695
            },
            "out": {
                "Andaman and Nicobar": 523,
                "Andhra Pradesh": 879,
                "Arunachal Pradesh": 345,
                "Assam": 732,
                "Bihar": 611,
                "Chandigarh": 458,
                "Chhattisgarh": 921,
                "Dādra and Nagar Haveli and Damān and Diu": 264,
                "Delhi": 815,
                "Goa": 390,
                "Gujarat": 672,
                "Himachal Pradesh": 492,
                "Haryana": 758,
                "Jharkhand": 639,
                "Jammu and Kashmir": 801,
                "Karnataka": 564,
                "Kerala": 743,
                "Ladakh": 199,
                "Lakshadweep": 280,
                "Maharashtra": 914,
                "Meghalaya": 341,
                "Manipur": 412,
                "Madhya Pradesh": 765,
                "Mizoram": 250,
                "Nagaland": 337,
                "Odisha": 684,
                "Punjab": 831,
                "Puducherry": 429,
                "Rajasthan": 752,
                "Sikkim": 184,
                "Telangana": 603,
                "Tamil Nadu": 821,
                "Tripura": 278,
                "Uttar Pradesh": 957,
                "Uttarakhand": 488,
                "West Bengal": 695
            }
        },
        {
            "latitude": 27.1766791,
            "longitude": 78.0080655,
            "nsh_name": "nsh_Agra",
            "in": {
                "Andaman and Nicobar": 412,
                "Andhra Pradesh": 734,
                "Arunachal Pradesh": 267,
                "Assam": 680,
                "Bihar": 531,
                "Chandigarh": 485,
                "Chhattisgarh": 853,
                "Dādra and Nagar Haveli and Damān and Diu": 210,
                "Delhi": 740,
                "Goa": 329,
                "Gujarat": 680,
                "Himachal Pradesh": 423,
                "Haryana": 710,
                "Jharkhand": 568,
                "Jammu and Kashmir": 735,
                "Karnataka": 600,
                "Kerala": 738,
                "Ladakh": 215,
                "Lakshadweep": 250,
                "Maharashtra": 860,
                "Meghalaya": 345,
                "Manipur": 387,
                "Madhya Pradesh": 730,
                "Mizoram": 290,
                "Nagaland": 315,
                "Odisha": 670,
                "Punjab": 750,
                "Puducherry": 375,
                "Rajasthan": 680,
                "Sikkim": 230,
                "Telangana": 580,
                "Tamil Nadu": 805,
                "Tripura": 255,
                "Uttar Pradesh": 870,
                "Uttarakhand": 460,
                "West Bengal": 635
            },
            "out": {
                "Andaman and Nicobar": 412,
                "Andhra Pradesh": 734,
                "Arunachal Pradesh": 267,
                "Assam": 680,
                "Bihar": 531,
                "Chandigarh": 485,
                "Chhattisgarh": 853,
                "Dādra and Nagar Haveli and Damān and Diu": 210,
                "Delhi": 740,
                "Goa": 329,
                "Gujarat": 680,
                "Himachal Pradesh": 423,
                "Haryana": 710,
                "Jharkhand": 568,
                "Jammu and Kashmir": 735,
                "Karnataka": 600,
                "Kerala": 738,
                "Ladakh": 215,
                "Lakshadweep": 250,
                "Maharashtra": 860,
                "Meghalaya": 345,
                "Manipur": 387,
                "Madhya Pradesh": 730,
                "Mizoram": 290,
                "Nagaland": 315,
                "Odisha": 670,
                "Punjab": 750,
                "Puducherry": 375,
                "Rajasthan": 680,
                "Sikkim": 230,
                "Telangana": 580,
                "Tamil Nadu": 805,
                "Tripura": 255,
                "Uttar Pradesh": 870,
                "Uttarakhand": 460,
                "West Bengal": 635
            }
        }
    ]

    // Define projection and path generator
    const projection = d3.geoMercator()
      .center([82, 22]) // Approximate center of India
      .scale(1300) // Adjust scale as needed
      .translate([width / 2, height / 2]);

    const path = d3.geoPath().projection(projection);

    // Create SVG container (ensure it’s not being added multiple times)
    const svg = d3.select("#map").select("svg").empty()
      ? d3.select("#map").append("svg").attr("width", width).attr("height", height)
      : d3.select("#map").select("svg");

    // Create a div to act as the tooltip
    const infoDiv = d3.select("body").append("div")
      .attr("class", "infoDiv")
      .style("opacity", 0)
      .style("pointer-events", "none")  // Ensure the div doesn't block mouse events
      .style("position", "absolute")
      .style("background", "white")
      .style("border", "1px solid #ccc")
      .style("padding", "5px")
      .style("font-size", "12px")
      .style("border-radius", "4px");

    // Define a color scale based on density values
    const colorScale = d3.scaleLinear()
      .domain([200, 1000]) // Min and max density values
      .range(["#f7fbff", "#08306b"]); // Light blue to dark blue

    // Load GeoJSON data
    d3.json("/inD.json").then((geojson) => {
      // Draw states
      svg.selectAll("path")
        .data(geojson.features)
        .enter()
        .append("path")
        .attr("d", path)
        .attr("class", "state")
        .attr("fill", "#ccc") // Default gray color
        .on("mouseover", (event, d) => {
          const stateName = d.properties.name;
          infoDiv.style("opacity", 1)
            .html(`<strong>${stateName}</strong><br>`);
        })
        .on("mousemove", (event) => {
          // Adjust infoDiv position near cursor
          infoDiv.style("left", `${event.pageX + 10}px`)  // Add an offset of 10px
            .style("top", `${event.pageY + 10}px`);  // Add an offset of 10px
        })
        .on("mouseout", () => infoDiv.style("opacity", 0));

      // Add NSH points to the map
      svg.selectAll(".nsh")
        .data(response)
        .enter()
        .append("circle")
        .attr("class", "nsh")
        .attr("cx", (d) => projection([d.longitude, d.latitude])[0])
        .attr("cy", (d) => projection([d.longitude, d.latitude])[1])
        .attr("r", 5)
        .style("fill", "red")
        .style("cursor", "pointer")
        .on("click", (event, d) => {
          // Get the selected NSH's 'in' data
          const nshInData = d.out;

          // Update the color of each state based on the selected NSH's data
          svg.selectAll(".state")
            .attr("fill", (stateData) => {
              const stateName = stateData.properties.name;
              const density = nshInData[stateName];
              return density ? colorScale(density) : "#ccc"; // Default gray if no density
            });

          // Show info about selected NSH
          infoDiv.style("opacity", 1)
            .html(`<strong>${d.nsh_name}</strong><br>Click on a state to see its density data.`);

          // Set state data for table
          const stateTableData = Object.keys(nshInData).map(state => ({
            stateName: state,
            traffic: nshInData[state],
          }));

          // Update stateData with new NSH's data
          setStateData(stateTableData);
        });
    }).catch((error) => {
      console.error("Error loading GeoJSON data:", error)
      console.log("Error loading GeoJSON data:", error)


    });

  }, []); // Empty dependency array ensures useEffect runs once

  // Function to toggle table visibility
  const toggleTableVisibility = () => {
    setIsTableVisible(!isTableVisible);
  };

  return (
    <div className="flex-row">
      <div className="text-3xl font-bold">National Heat Map of Destination States</div>
      <div id="map"></div>
      <button onClick={toggleTableVisibility}>
        {isTableVisible ? "Hide Table" : "Show Table"}
      </button>
      
      {isTableVisible && (
        <div id="table-container">
          <h3>State-wise Traffic In Data</h3>
          <table border="1">
            <thead>
              <tr>
                <th>State</th>
                <th>In Traffic</th>
              </tr>
            </thead>
            <tbody>
              {stateData.map((data, index) => (
                <tr key={index}>
                  <td>{data.stateName}</td>
                  <td>{data.traffic}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <style jsx>{`
        
        .state {
          stroke: #000;
          stroke-width: 0.5px;
        }
        .infoDiv {
          position: absolute;
          background: white;
          border: 1px solid #ccc;
          padding: 5px;
          font-size: 12px;
          pointer-events: none;  /* Info div doesn't block mouse events */
          border-radius: 4px;
        }
        table {
          margin-top: 20px;
          width: 100%;
          border-collapse: collapse;
        }
        th, td {
          padding: 8px;
          text-align: left;
        }
        button {
          margin-top: 20px;
          padding: 10px;
          background-color: #4CAF50;
          color: white;
          border: none;
          cursor: pointer;
        }
        button:hover {
          background-color: #45a049;
        }
      `}</style>
    </div>
  );
};

export default IndexPage;
