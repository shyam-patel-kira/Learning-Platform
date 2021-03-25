import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import Sidebar from '../Components/Sidebar/Sidebar';
import Footer from '../Components/Footer';
import Ieltsmainhero from '../Components/Hero/Ieltsmain/Ieltsmainhero';


function Ieltsmain() {
    return (
    <div className="">
        <Navbar />
        <div className="container-fluid">
		        <div className="row"> 
			        <div className="col-md-4"><Sidebar /></div> 
                    <div className="col-md-12"><Ieltsmainhero /></div>
		        </div>
        </div>
        <Footer /> 
    </div>

    
    

        // <>
        //     <Navbar />
        //     <Sidebar />
        //     <Ieltsmainhero />

        // </>

    )
}

export default Ieltsmain
