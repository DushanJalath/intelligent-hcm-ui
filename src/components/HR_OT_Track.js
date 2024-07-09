import React,{useEffect,useState}from "react";
import'../styles/HR_OT_Track.css';
import HROTChart from "../components/HROTChart";
import NameTag from "./NameTag";
import api from "../api"



const HRTrackOT = ({userType,title }) => {
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



    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentData = otData.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(otData.length / itemsPerPage);
  
    const handlePageChange = (newPage1) => {
      setCurrentPage(newPage1);
    };

    const handlePreviousPage = () => {
      setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
      setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

    return (
        <div className="hrOTContainer">
             <div className="managers-attendances-title">{title}</div>
            <div className="ot-table">
           
            <p className='requestLeavedescription'>View the list of employees currently present today. HR can track real-time attendance and manage workforce availability efficiently.</p>
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
           
            <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                <button
                    onClick={handlePreviousPage}
                    style={{ marginRight: "10px", fontWeight: 600 }}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                {[...Array(totalPages).keys()].map((page) => (
                    <button
                        key={page + 1}
                        onClick={() => handlePageChange(page + 1)}
                        style={{
                            marginRight: "10px",
                            padding: "8px 16px",
                            borderRadius: "25px",
                            backgroundColor: currentPage === page + 1 ? "#218838" : "#f0f0f0",
                            color: currentPage === page + 1 ? "white" : "black",
                            fontWeight: currentPage === page + 1 ? "900" : "normal",
                            border: currentPage === page + 1 ? "none" : "none",
                            cursor: "pointer",
                            transition: "background-color 0.3s",
                        }}
                    >
                        {page + 1}
                    </button>
                ))}
                <button
                    onClick={handleNextPage}
                    style={{ marginLeft: "10px", fontWeight: 600 }}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default HRTrackOT;


