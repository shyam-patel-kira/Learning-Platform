import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import Sidebar from '../Components/Sidebar/Sidebar';
import Ieltslisteninghero from '../Components/Hero/Listening/Ieltslisteninghero';

function Ieltslistening() {
    return (
        <div className="">
        <Navbar />
        <div className="container-fluid">
		        <div className="row"> 
			        <div className="col-md-4"><Sidebar /></div>
                    <div className="col-md-8"><Ieltslisteninghero /></div>
		        </div>
        </div>
        {/* <div className="row align-items-end"> 
			    <div className="col"><Footer /></div>
		</div> */}
        {/* <Footer />   */}
    </div>
    )
}

export default Ieltslistening
