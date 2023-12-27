import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import * as Icons from "@mui/icons-material";
// import { hover } from '@testing-library/user-event/dist/hover';
import { ChevronRight } from "@mui/icons-material";
import { Search, Menu, Logout } from "@mui/icons-material";



/////////// Fine code with RESPONSIVE AND NAVIGATION Fixed ////////


const SideNav = () => {
  const [activeLink, setActiveLink] = useState("");
  const [activeSublink, setActiveSublink] = useState("");
  const [opacity, setOpacity] = useState(0);
  const animationDuration = 100;
  const location = useLocation(); // Get the current location object
  const path = location.path;

  // useEffect(() => {
  //   const pathname = location.pathname;

  //   const matchingNavLink = navLinks.find((link) =>
  //     pathname.startsWith(`/${link.link}`)
  //   );

  //   if (matchingNavLink) {
  //     setActiveLink(matchingNavLink.name);
  //   } else {
  //     setActiveLink("Dashboard");
  //   }
  // }, [location]);

  const navLinks = [
    {
      cat: "Dashboard",
      listname : "Dashboard",
      name: "Dashboard",
      state: "isActiveDashboard",
      icon: "GridViewRounded",
      link: "Dashboard",
    },
    {
      cat: "Purchase",
      listname : "Purchase",
      name: "Purchase",
      state: "isActivePurchase",
      icon: "Payments",
      link: "Purchase",
    },
    {
      cat: "My Profile",
      listname : "My Profile",
      name: "MyProfile",
      state: "isMyProfile",
      icon: "Person",
      link: 'MyProfile',
      sublinks: [
        'MyProfile',
        'Security'
      ],
      subname: [
        'View Profile',
        'Security'
  
      ],
      subicons : [
        "Person",
        'Security'
      ]
    },
    {
      cat: "Features",
      listname : "My KYC",
      name: "MyKYC",
      state: "isActiveMyKYC",
      icon: "AddToQueue",
      link: "MyKYC",
    },
    
    {
      cat: "Features",
      listname : "My Genealogy",
      name: "MyGenealogy",
      state: "isMyGenealogy",
      icon: "Schema",
      link: "MyGenealogy",
    },
    {
      cat: "Features",
      listname : "My Earnings",
      name: "MyEarnings",
      state: "isMyEarnings",
      icon: "CreditScore",
      link: "MyEarnings",
    },
    {
      cat: "Features",
      listname : "My Packages",
      name: "MyPackages",
      state: "isMyActivePackages",
      icon: "HomeRepairService",
      link: "MyActivePackages",
    },
    {
      cat: "Features",
      listname : "My Wallet",
      name: "MyWallet",
      state: "isMyWallet",
      icon: "Wallet",
      link: "CurrentWallet",
    },
    {
      cat: "Features",
      listname : "My BV Points",
      name: "MyBVPoints",
      state: "isMyBVPoints",
      icon: "Scoreboard",
      link: "MyBVPoints",
    },
  ];



  useEffect(() => {
    const pathname = location.pathname;

    const matchingSublink = navLinks
      .filter((link) => link.sublinks)
      .find((link) => link.sublinks.some((sublink) => pathname.startsWith(`/${sublink}`)));

    if (matchingSublink) {
      setActiveSublink(pathname.split('/')[1]); // Set the active sublink based on the current pathname
      setActiveLink(matchingSublink.name); // Set the active link
    } else {
      const matchingNavLink = navLinks.find((link) =>
        pathname.startsWith(`/${link.link}`)
      );

      if (matchingNavLink) {
        setActiveLink(matchingNavLink.name);
      } else {
        setActiveLink("Dashboard");
      }
    }
  }, [location]);




  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };



  // useEffect(() => {
  //   const storedSubActiveLink = localStorage.getItem("activeSubLink");
  //   const isValidSubActiveLink = navLinks.some(
  //     (link) => link.sublinks && link.sublinks.includes(storedSubActiveLink)
  //   );
  //   if (!isValidSubActiveLink) {
  //     const defaultSublink =
  //       navLinks.find((link) => link.sublinks)?.sublinks[0] || "";
  //     setActiveSublink(defaultSublink);
  //   } else {
  //     setActiveSublink(storedSubActiveLink);
  //   }
  // }, []);


  useEffect(() => {
    localStorage.setItem("activeLink", activeLink);
  }, [activeLink]);

  useEffect(() => {
    localStorage.setItem("activeSublink", activeSublink);
  }, [activeSublink]);

  const handleLinkClick = (linkName) => {
    
    // setActiveLink(linkName);
    // // setIsSideNavOpen(false);
  
    //   setIsSideNavOpen(false);

    if(linkName === "MyProfile")
    {
      setIsSideNavOpen(true);
    }
    else if(linkName === "Dashboard" || linkName === "Purchase" || linkName === "MyKYC" || linkName ==="MyBVPoints" || linkName === "MyEarnings" || 
    linkName === "MyPackages" || linkName === "MyWallet" || linkName ==="MyGenealogy" )
    {
      setIsSideNavOpen(false);
      setActiveLink(linkName);
    }
    // else 
    // {
    //   setIsSideNavOpen(false);
    //   setActiveLink(linkName);
    // }
   
  };

  const handleSublinkClick = (sublinkName) => {
    setActiveSublink(sublinkName); // Set the active sublink
    setIsSideNavOpen(false);
  };

  const renderNavLink = (link, index) => {
    const isActive = activeLink === link.name;
    const stateKey = link.state;
    const Icon = Icons[link.icon];
    

    return (
      <li key={link.name} className="parent-link">
        {index < 4 && (
          <li className="nav-head">
            <div className="nav-head-category w-full sm:h-[36px] justify-start items-center px-8 hidden lg:flex ">
              <span className="uppercase sm:text-[12px] text-[#565656] font-semibold ">
                {link.cat}
              </span>
            </div>
          </li>
        )}

        <div className="w-full relative">
          <Link to={`/${link.link}`}>
            <li
              className={`child-link cursor-pointer ${isActive ? "child-link-active" : "child-link-Inactive"
                }`}
              onClick={() => handleLinkClick(link.name)}
            >
              <div className="child-link-outter-1 w-full sm:h-[48px] flex flex-row items-center text-center hover:text-white">
                <div className="child-link-outter-2 lg:w-[75%] w-[80%] sm:w-auto px-6 sm:px-0 lg:px-6 h-[48px]  rounded-[6px] justify-start items-center flex flex-row mx-auto">
                  <div className="sm:w-[32px] sm:h-[32px] rounded-[4px] flex justify-center items-center lg:mr-[16px] sm:mr-0 mr-[16px]">
                    <span className="ico-span text-[14px] text-[#565656]">
                      {" "}
                      <Icon />{" "}
                    </span>
                  </div>
                  <span className="link-label capitalize sm:text-[16px] text-[#565656] font-semibold  block sm:hidden lg:block">
                    {link.listname}
                  </span>
                </div>
              </div>
            </li>
          </Link>



          {link.sublinks && isActive && (
            <div className="w-full flex flex-col justify-center items-center">
              <ul className="sublinks mt-3 md:space-y-5">
                {link.sublinks.map((sublink, sublinkIndex) => (
                  <li
                    key={sublink}
                    className={`sublink cursor-pointer ${isActive && activeSublink === sublink
                      ? "text-[#FFA524]"
                      : "text-[#565656]"
                      }`}
                  >
                    <Link to={`/${sublink}`}>
                      <div
                        className="sublink-outter-1 h-[48px] justify-start flex items-center w-full"
                        onClick={() => handleSublinkClick(sublink)}
                      >
                     
                          <span className="link-label text-[14px] md:absolute lg:relative">
                          <ChevronRight /> {link.subname[sublinkIndex]}
                        </span>
                      
                        
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}



          <Link to={`/${link.link}`}>
            <li
              className={`child-link cursor-pointer absolute top-0 w-full ${isActive ? "child-link-Inactive" : "child-link-active"
                }`}
              onClick={() => handleLinkClick(link.name)}
            >
              <div className="child-link-outter-1 w-full h-[48px] flex flex-row items-center text-center ">
                <div className="child-link-bar w-[6px] h-[40px] bg-[#FFA524] lg:mr-[30px] md:mr-[10px] mr-[16px]"></div>
                <div className="child-link-outter-2 lg:w-[75%] w-[80%] sm:w-auto px-6 sm:px-0 lg:px-6 lg:h-[48px] h-[32px] border-[#FFA524] lg:border-[1px] border-[1px] sm:border-0 rounded-[6px] justify-start items-center flex flex-row shadow-lg shadow-black bg-[#151515]">
                  <div className="ico-box w-[32px] h-[32px] rounded-[4px] bg-[#FFA524] flex justify-center items-center lg:mr-[16px] sm:mr-0 mr-[16px]">
                    <span className="ico-span text-[14px] text-[#151515]">
                      {" "}
                      <Icon />{" "}
                    </span>
                  </div>
                  <span className="link-label capitalize sm:text-[16px] text-[#ffffff] font-semibold block sm:hidden lg:block ">
                    {link.listname}
                  </span>
                </div>
              </div>
            </li>
          </Link>





        </div>
      </li>
    );
  };

  // Slice the first 3 items from the navLinks array
  const displayedNavLinks = navLinks.slice(0, 3);
  const remainingNavLinks = navLinks.slice(3); // Get the rest of the links

  return (



    <div className={`flex flex-row w-full ${isSideNavOpen ? "sidenav-open" : ""}`}>
      <div className={`res-sidenav  lg:w-[300px] md:w-[80px] h-full fixed flex flex-col bg-[#151515] z-10 w-full backdrop-blur-md bg-opacity-90 sm:bg-opacity-100 sm:backdrop-blur-0 overflow-y-scroll sm:overflow-hidden ${isSideNavOpen ? "sidenav-open" : ""}`}>
        <ul className="flex flex-col w-full space-y-3 mt-[66px] sm:mt-0">
          <li>
            <div className="w-full sm:h-[16px] flex justify-start items-center px-8"></div>
          </li>
          {displayedNavLinks.map((link, index) => renderNavLink(link, index))}
          {remainingNavLinks.map((link, index) =>
            renderNavLink(link, index + 3)
          )}{" "}

          <Link to="/">
            <div className="signout-btn child-link-outter-1 w-full sm:h-[48px] flex flex-row items-center text-center hover:text-white">
              <div className="child-link-outter-2 lg:w-[75%] w-[80%] sm:w-auto px-6 sm:px-0 lg:px-6 lg:h-[48px] h-[32px]  rounded-[6px] justify-start items-center flex flex-row mx-auto">
                <div className="sm:w-[32px] sm:h-[32px] rounded-[4px] flex justify-center items-center lg:mr-[16px] sm:mr-0 mr-[16px]">
                  <span className="ico-span text-[14px] text-[#565656]">
                    <Logout />
                  </span>
                </div>
                <span className="link-label capitalize sm:text-[16px] text-[#565656] font-semibold  block sm:hidden lg:block">
                  SignOut
                </span>
              </div>
            </div>
          </Link>

        </ul>
      </div>
      <div
        className={`h-[56px] lg:ml-[300px] md:ml-[80px] bg-[#151515] flex flex-row w-full justify-start items-center space-x-5 fixed top-0 z-30 sm:hidden`}
      >
        <span
          className="Menu-btn text-[16px] text-[#FFA524] ml-5 z-30"
          onClick={toggleSideNav}
        >
          <Menu />
        </span>
      </div>
    </div>


  );
};

export default SideNav;
