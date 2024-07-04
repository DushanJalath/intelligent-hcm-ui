import React,{useEffect,useState}from "react";
import'../styles/HR_OT_Track.css';
import HROTChart from "../components/HROTChart";
import NameTag from "./NameTag";
import api from "../api"



const HRTrackOT = ({userType}) => {
    const [otData, setOtData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const accessToken = localStorage.getItem('token');
                console.log('Access Token:', accessToken);
                console.log('Request Headers:', {
                Authorization: `Bearer ${accessToken}`,
                });
                const endpoint = userType === 'Manager' ? '/get_ot_data_man' : '/get_ot_data_emp';
                const response = await api.get(endpoint, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }); 
                const data = response.data;
                setOtData(data);
            } catch (error) {
                console.error('Error fetching OT data:', error);
            }
        };

        fetchData();
    }, [userType]);


    const itemsPerPages = 8;
    const indexOfLastItem = currentPage * itemsPerPages;
    const indexOfFirstItem = indexOfLastItem - itemsPerPages;
    const currentData = otData.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(otData.length / itemsPerPages);
  
    const handlePageChange = (newPage1) => {
      setCurrentPage(newPage1);
    };

    return (
        <div className="hrOTContainer">
            <div className="ot-table">
                {Array.from({ length: Math.ceil(currentData.length / 3) }, (_, rowIndex) => (
                    <div key={rowIndex} className="ot-row">
                        {currentData.slice(rowIndex * 3, rowIndex * 3 + 3).map((data, colIndex) => (
                            <div key={colIndex} className="ot-chart-container">
                                <NameTag name={data.name} role={data.role} dp={data.dp} />
                                <HROTChart values={[data.completed, data.remaining]} />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
           
            <nav aria-label="Page-navigation">
          <ul className="hrot-pagination">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button
                className={`page-link1 ${
                  currentPage === 1 ? "active-prev" : ""
                }`}
                onClick={() => handlePageChange(currentPage - 1)}
              >
                Previous
              </button>
            </li>
            {Array.from({ length: totalPages }, (_, index) => (
              <li
                key={index}
                className={`page-item1 ${
                  currentPage === index + 1 ? "active" : ""
                }`}
              >
                <button
                  className={`page-link ${
                    currentPage === index + 1 ? "active" : ""
                  }`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}
            <li
              className={`page-item ${
                currentPage === totalPages ? "disabled" : ""
              }`}
            >
              <button
                className={`page-link1 ${
                  currentPage === totalPages ? "active-next" : ""
                }`}
                onClick={() => handlePageChange(currentPage + 1)}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
        </div>
    );
};

export default HRTrackOT;


