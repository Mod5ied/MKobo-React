import React from "react";

function Sidebar() {
  return (
    <>
      <aside id="side_bar">
        <nav id="side_bar_wrapper">
          <a href="" className="side_bar_links">
            <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M24.3811 10.1408L19.8482 6.26985C19.8535 6.24337 19.8588 6.2169 19.8641 6.18512V1.12264C19.8588 0.8208 19.6205 0.577207 19.3187 0.566616H16.7874C16.4962 0.566616 16.2579 0.826095 16.2579 1.12264V3.21965L12.6305 0.127092C12.4345 -0.0423639 12.1433 -0.0423639 11.942 0.127092L0.191374 10.1356C-0.0363321 10.3209 -0.0628095 10.6545 0.122532 10.8822C0.307874 11.1099 0.64149 11.1364 0.869195 10.9511C0.874491 10.9458 0.874491 10.9458 0.879786 10.9405L12.2863 1.22855L23.698 10.9458C23.9204 11.1364 24.254 11.1099 24.4447 10.8875C24.63 10.6651 24.6035 10.3315 24.3811 10.1408ZM18.7997 5.37491L17.317 4.12518V1.63101H18.7997V5.37491Z"
                fill="url(#paint0_linear_1_371)"
              />
              <path
                d="M22.0459 11.2105L12.6305 3.16669C12.4346 2.99724 12.1433 2.99724 11.9421 3.16669L2.52675 11.2105C2.30434 11.4012 2.27786 11.7348 2.4685 11.9572C2.65384 12.1796 2.98216 12.2061 3.19928 12.0207L3.20457 12.0154L3.86651 11.4435V21.3726C3.8718 21.6691 4.1154 21.9127 4.41194 21.918H20.1554C20.452 21.9127 20.6956 21.6744 20.7008 21.3726V11.4435L21.3628 12.0154C21.4581 12.0949 21.5746 12.1425 21.7017 12.1425C21.8553 12.1425 22.0035 12.0737 22.1041 11.9572C22.3001 11.7295 22.2683 11.3959 22.0459 11.2105ZM14.4045 20.8536H10.1681V15.1345H14.4045V20.8536ZM15.4636 20.8536V14.6208C15.4636 14.3296 15.2465 14.0754 14.9552 14.0754H9.6174C9.32615 14.0754 9.10904 14.3296 9.10904 14.6208V20.8536H4.9256V10.538L12.2863 4.26815L19.647 10.538V20.8536H15.4636Z"
                fill="url(#paint1_linear_1_371)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_371"
                  x1="0.361289"
                  y1="1.28929"
                  x2="24.5726"
                  y2="1.18803"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4181F9" />
                  <stop offset="1" stopColor="#0047CC" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_1_371"
                  x1="0.361289"
                  y1="1.28929"
                  x2="24.5726"
                  y2="1.18803"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4181F9" />
                  <stop offset="1" stopColor="#0047CC" />
                </linearGradient>
              </defs>
            </svg>
            Dashboard
          </a>
          <a href="" className="side_bar_links">
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.  w3.org/2000/svg">
              <path
                d="M3.22755 5.72758C3.89347 5.99419 4.59493 6.12903 5.31234 6.12903C5.45606 6.12903 5.59979 6.12352 5.7429 6.11248L8.50281 5.90011C9.11877 6.44192 9.90114 6.74193 10.7258 6.74193C12.5844 6.74193 14.0968 5.2296 14.0968 3.37097C14.0968 1.51234 12.5844 0 10.7258 0C10.2842 0 9.86314 0.0876452 9.4761 0.24271C8.90334 0.0144032 8.27848 -0.0560807 7.66558 0.0459677L4.80577 0.522806C4.40953 0.588694 4.0185 0.69779 3.64371 0.847952L2.73631 1.21079L0 0.52679V6.21545L2.73631 5.53145L3.22755 5.72758ZM13.4839 3.37097C13.4839 4.89189 12.2464 6.12903 10.7258 6.12903C10.2162 6.12903 9.72616 5.98837 9.29927 5.72911C9.60174 5.54953 9.80645 5.22255 9.80645 4.85113C9.80645 4.38011 9.48713 3.97131 9.03021 3.85731L8.11147 3.62747C8.06856 3.61674 8.02658 3.60326 7.98398 3.59192C7.97847 3.51806 7.96774 3.44482 7.96774 3.37097C7.96774 1.85005 9.20519 0.612903 10.7258 0.612903C12.2464 0.612903 13.4839 1.85005 13.4839 3.37097ZM7.35576 3.39916C6.98618 3.27137 6.62334 3.12213 6.27368 2.94745C6.1845 2.90302 6.12903 2.81323 6.12903 2.71332C6.12903 2.56929 6.2464 2.45161 6.39074 2.45161H7.48539C7.40234 2.74427 7.35484 3.05195 7.35484 3.37097C7.35484 3.38047 7.35576 3.38997 7.35576 3.39916ZM3.8714 1.41703C4.20544 1.28342 4.55387 1.18597 4.9066 1.12744L7.7664 0.650597C8.08603 0.597274 8.40903 0.607387 8.72376 0.665306C8.3076 0.973903 7.96529 1.37444 7.72687 1.83871H6.39074C5.90839 1.83871 5.51613 2.23097 5.51613 2.71332C5.51613 3.04644 5.70123 3.34614 5.99971 3.49569C6.62518 3.80827 7.28558 4.05252 7.96314 4.22168L8.88189 4.45152C9.06545 4.49779 9.19355 4.66205 9.19355 4.85113C9.19355 5.06473 9.02653 5.24492 8.81355 5.26147L5.69571 5.50142C4.93173 5.56118 4.16713 5.4435 3.45524 5.1585L3.06452 5.00221V1.73973L3.8714 1.41703ZM2.45161 4.97034L0.612903 5.43002V1.31192L2.45161 1.7716V4.97034Z"
                fill="#263238"
                fillOpacity="0.5"
              />
              <path
                d="M18.1584 11.2094L16.8143 9.19353H16.8548C17.3617 9.19353 17.7741 8.78105 17.7741 8.27418C17.7741 7.76731 17.3617 7.35482 16.8548 7.35482H5.20962C4.70275 7.35482 4.29027 7.76731 4.29027 8.27418C4.29027 8.78105 4.70275 9.19353 5.20962 9.19353H5.25007L3.90628 11.2094C3.35559 12.035 3.06446 12.9963 3.06446 13.9889C3.06446 16.7522 5.31228 19 8.07556 19H13.9888C16.7521 19 18.9999 16.7522 18.9999 13.9889C18.9999 12.9963 18.7088 12.035 18.1584 11.2094ZM4.90317 8.27418C4.90317 8.10502 5.04077 7.96773 5.20962 7.96773H16.8548C17.0236 7.96773 17.1612 8.10502 17.1612 8.27418C17.1612 8.44334 17.0236 8.58063 16.8548 8.58063H5.20962C5.04077 8.58063 4.90317 8.44334 4.90317 8.27418ZM8.58059 15.9355V15.3226H9.19349V15.9355H9.8064V15.3226H10.4193V15.9355H11.0322V15.3226H11.6451V15.9355H12.258V15.3226H12.5645C12.7333 15.3226 12.8709 15.4599 12.8709 15.629V16.2419C12.8709 16.4111 12.7333 16.5484 12.5645 16.5484H7.66124C7.49238 16.5484 7.35478 16.4111 7.35478 16.2419V15.629C7.35478 15.4599 7.49238 15.3226 7.66124 15.3226H7.96769V15.9355H8.58059ZM9.8064 14.4032V13.7903C9.8064 13.6211 9.94399 13.4839 10.1128 13.4839H10.4193V14.0968H11.0322V13.4839H11.6451V14.0968H12.258V13.4839H12.8709V14.0968H13.4838V13.4839H14.0967V14.0968H14.7096V13.4839H15.0161C15.1849 13.4839 15.3225 13.6211 15.3225 13.7903V14.4032C15.3225 14.5724 15.1849 14.7097 15.0161 14.7097H10.1128C9.94399 14.7097 9.8064 14.5724 9.8064 14.4032ZM9.8064 12.258V11.6451H10.4193V12.258H11.0322V11.6451H11.6451V12.258H12.258V11.6451H12.8709V12.258H13.4838V11.6451H13.7903C13.9591 11.6451 14.0967 11.7824 14.0967 11.9516V12.5645C14.0967 12.7337 13.9591 12.871 13.7903 12.871H8.88704C8.71819 12.871 8.58059 12.7337 8.58059 12.5645V11.9516C8.58059 11.7824 8.71819 11.6451 8.88704 11.6451H9.19349V12.258H9.8064ZM8.88704 18.3871C8.71819 18.3871 8.58059 18.2498 8.58059 18.0806V17.4677C8.58059 17.2986 8.71819 17.1613 8.88704 17.1613H9.19349V17.7742H9.8064V17.1613H10.4193V17.7742H11.0322V17.1613H11.6451V17.7742H12.258V17.1613H12.8709V17.7742H13.4838V17.1613H13.7903C13.9591 17.1613 14.0967 17.2986 14.0967 17.4677V18.0806C14.0967 18.2498 13.9591 18.3871 13.7903 18.3871H8.88704ZM14.6713 18.3285C14.6937 18.2492 14.7096 18.167 14.7096 18.0806V17.4677C14.7096 16.9609 14.2971 16.5484 13.7903 16.5484H13.4274C13.4618 16.4521 13.4838 16.3498 13.4838 16.2419V15.629C13.4838 15.5211 13.4618 15.4188 13.4274 15.3226H15.0161C15.5229 15.3226 15.9354 14.9101 15.9354 14.4032V13.7903C15.9354 13.2834 15.5229 12.871 15.0161 12.871H14.6532C14.6876 12.7747 14.7096 12.6724 14.7096 12.5645V11.9516C14.7096 11.4447 14.2971 11.0322 13.7903 11.0322H8.88704C8.38017 11.0322 7.96769 11.4447 7.96769 11.9516V12.5645C7.96769 13.0714 8.38017 13.4839 8.88704 13.4839H9.24988C9.21556 13.5801 9.19349 13.6824 9.19349 13.7903V14.4032C9.19349 14.5111 9.21556 14.6134 9.24988 14.7097H7.66124C7.15436 14.7097 6.74188 15.1221 6.74188 15.629V16.2419C6.74188 16.7488 7.15436 17.1613 7.66124 17.1613H8.02407C7.98975 17.2575 7.96769 17.3599 7.96769 17.4677V18.0806C7.96769 18.1876 7.98945 18.289 8.02346 18.3843C5.62241 18.3561 3.67736 16.3964 3.67736 13.9889C3.67736 13.1176 3.93264 12.274 4.41591 11.5492L5.98648 9.19353H16.0779L17.6485 11.5495C18.1318 12.2743 18.387 13.118 18.387 13.9892C18.387 16.1812 16.7727 17.9988 14.6713 18.3285Z"
                fill="#263238"
                fillOpacity="0.5"
              />
              <path
                d="M15.1288 9.97146L15.6387 9.63134L16.0475 10.2442L15.5376 10.5843L15.1288 9.97146Z"
                fill="#263238"
                fillOpacity="0.5"
              />
              <path
                d="M17.1385 11.8894L16.4539 10.8622L15.9439 11.202L16.6286 12.2293C16.977 12.7521 17.1612 13.3607 17.1612 13.9889L17.1596 14.0876L17.7722 14.1057C17.7735 14.0668 17.7741 14.0278 17.7741 13.9889C17.7741 13.2393 17.5543 12.5133 17.1385 11.8894Z"
                fill="#263238"
                fillOpacity="0.5"
              />
              <path
                d="M4.57962 15.4403C4.68075 15.683 4.80793 15.9162 4.95748 16.1332L5.46189 15.7847C5.33656 15.603 5.23022 15.4081 5.14564 15.2049L4.57962 15.4403Z"
                fill="#263238"
                fillOpacity="0.5"
              />
              <path
                d="M4.92592 11.8894C4.51006 12.5133 4.29034 13.2393 4.29034 13.9889C4.29034 14.2527 4.31792 14.5169 4.37216 14.7731L4.97188 14.6462C4.92622 14.4317 4.90324 14.2104 4.90324 13.9889C4.90324 13.3603 5.08742 12.752 5.43585 12.2292L5.50756 12.1213L4.99763 11.7815L4.92592 11.8894Z"
                fill="#263238"
                fillOpacity="0.5"
              />
            </svg>
            Mkolo
          </a>
          <a href="" className="side_bar_links">
            <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.7918 0.811236L13.2144 3.35048L11.0662 1.54531C10.7325 1.26521 10.3108 1.11154 9.87513 1.11124H5.85775C5.78142 0.895344 5.64025 0.708309 5.45356 0.575715C5.26687 0.443122 5.04377 0.371448 4.81479 0.370498H1.1111C0.816422 0.370498 0.533808 0.487562 0.325435 0.695934C0.117063 0.904307 0 1.18692 0 1.4816V8.88897C0 9.18365 0.117063 9.46627 0.325435 9.67464C0.533808 9.88301 0.816422 10.0001 1.1111 10.0001H4.81479C5.04099 9.99902 5.26148 9.92895 5.44679 9.79923C5.6321 9.66952 5.77341 9.48633 5.85182 9.27415L12.2592 9.57897C12.301 9.58082 12.3429 9.58193 12.3844 9.58193C12.7488 9.58233 13.1092 9.50558 13.4418 9.35671C13.7745 9.20785 14.0718 8.99025 14.3144 8.71823L18.8147 3.69085C19.1772 3.28682 19.3681 2.7575 19.3469 2.21512C19.3257 1.67273 19.0941 1.15993 18.7011 0.785424C18.3082 0.410918 17.7849 0.204156 17.2421 0.208975C16.6994 0.213794 16.1798 0.429814 15.7936 0.811236H15.7918ZM4.81479 9.25934H1.1111C1.01288 9.25934 0.918673 9.22032 0.849215 9.15086C0.779758 9.0814 0.740737 8.9872 0.740737 8.88897V1.4816C0.740737 1.38338 0.779758 1.28917 0.849215 1.21971C0.918673 1.15026 1.01288 1.11124 1.1111 1.11124H4.81479C4.91302 1.11124 5.00722 1.15026 5.07668 1.21971C5.14614 1.28917 5.18516 1.38338 5.18516 1.4816V8.88897C5.18516 8.9872 5.14614 9.0814 5.07668 9.15086C5.00722 9.22032 4.91302 9.25934 4.81479 9.25934ZM18.261 3.19678L13.7625 8.22416C13.5794 8.42994 13.3524 8.59201 13.0983 8.69842C12.8442 8.80482 12.5695 8.85285 12.2944 8.83897L5.92589 8.53601V1.85197H9.87513C10.1363 1.85172 10.3893 1.94352 10.5896 2.11123L12.9466 4.09196C13.0963 4.21831 13.1899 4.39884 13.2068 4.59404C13.2238 4.78923 13.1627 4.98318 13.037 5.13343C12.9106 5.28328 12.73 5.37693 12.5347 5.39387C12.3394 5.41081 12.1454 5.34965 11.9951 5.2238L11.1714 4.53122C11.1342 4.49989 11.0911 4.47622 11.0447 4.46153C10.9983 4.44685 10.9494 4.44146 10.901 4.44565C10.8525 4.44985 10.8053 4.46355 10.7621 4.48599C10.7189 4.50842 10.6805 4.53914 10.6492 4.5764C10.5859 4.65164 10.5552 4.74893 10.5636 4.84687C10.5721 4.9448 10.6191 5.03536 10.6944 5.09862L11.5185 5.79121C11.8192 6.04351 12.2079 6.16612 12.599 6.13209C12.9901 6.09806 13.3517 5.91019 13.6044 5.60973C13.804 5.37138 13.9236 5.07626 13.9462 4.76617C13.9688 4.45608 13.8933 4.14674 13.7303 3.88196L16.3114 1.33864C16.5604 1.09167 16.8959 0.951564 17.2466 0.948091C17.5973 0.944619 17.9355 1.07806 18.1894 1.32005C18.4432 1.56204 18.5927 1.89349 18.606 2.24395C18.6193 2.59441 18.4954 2.93624 18.2606 3.19678H18.261Z"
                fill="#8B9298"
              />
            </svg>
            EarlyPay
          </a>
          <a href="" className="side_bar_links">
            <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M18.3215 0.428598H12.2144C11.8396 0.428598 11.5358 0.732404 11.5358 1.10718C11.5358 1.48196 11.8396 1.78577 12.2144 1.78577H14.3112C14.6025 3.49068 15.938 4.82617 17.643 5.11754V9.3111C15.938 9.60246 14.6025 10.938 14.3112 12.6429H4.68906C4.3977 10.938 3.0622 9.60246 1.35729 9.3111V5.1175C3.0622 4.8261 4.3977 3.49064 4.68906 1.78573H6.78585C7.16062 1.78573 7.46443 1.48192 7.46443 1.10714C7.46443 0.732365 7.16062 0.428558 6.78585 0.428558H0.678706C0.303928 0.428598 0.00012207 0.732404 0.00012207 1.10714V13.3214C0.00012207 13.6962 0.303928 14 0.678706 14H18.3215C18.6963 14 19.0001 13.6962 19.0001 13.3214V1.10714C19.0001 0.732404 18.6963 0.428598 18.3215 0.428598ZM1.35725 1.78573H3.29663C3.04832 2.73527 2.3068 3.4768 1.35725 3.7251V1.78573ZM1.35725 12.6429V10.7035C2.3068 10.9518 3.04832 11.6933 3.29663 12.6429H1.35725ZM17.643 12.6429H15.7036C15.9519 11.6933 16.6934 10.9518 17.643 10.7035V12.6429ZM17.643 3.72506C16.6934 3.47676 15.9519 2.73523 15.7036 1.78569H17.643V3.72506Z"
                fill="#8B9298"
              />
            </svg>
            Pay Bills
          </a>
          <a href="" className="side_bar_links">
            <svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect
                x="0.35"
                y="0.35"
                width="18.3"
                height="11.3"
                rx="0.65"
                stroke="#8B9298"
                strokeWidth="0.7"
              />
            </svg>
            Debit Cards
          </a>
          <a href="" className="side_bar_links">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13.6569 2.34332C12.1459 0.832336 10.1368 0.000183105 8 0.000183105C5.86304 0.000183105 3.85413 0.832336 2.34314 2.34332C0.832153 3.85431 0 5.86322 0 8.00018C0 10.137 0.832153 12.1461 2.34314 13.657C3.85413 15.168 5.86304 16.0002 8 16.0002C10.1368 16.0002 12.1459 15.168 13.6569 13.657C15.1678 12.1461 16 10.137 16 8.00018C16 5.86322 15.1678 3.85431 13.6569 2.34332V2.34332ZM4.01062 13.8248C4.34521 11.8983 6.01465 10.4772 8 10.4772C9.98547 10.4772 11.6548 11.8983 11.9894 13.8248C10.8535 14.6052 9.47925 15.0627 8 15.0627C6.52075 15.0627 5.14648 14.6052 4.01062 13.8248ZM5.4563 6.99603C5.4563 5.59332 6.59741 4.45233 8 4.45233C9.40259 4.45233 10.5437 5.59344 10.5437 6.99603C10.5437 8.39862 9.40259 9.53973 8 9.53973C6.59741 9.53973 5.4563 8.39862 5.4563 6.99603V6.99603ZM12.8014 13.1745C12.5491 12.2776 12.048 11.4639 11.3456 10.8283C10.9147 10.4383 10.4242 10.1306 9.89685 9.91364C10.85 9.29193 11.4813 8.21637 11.4813 6.99603C11.4813 5.07648 9.91956 3.51483 8 3.51483C6.08044 3.51483 4.5188 5.07648 4.5188 6.99603C4.5188 8.21637 5.15015 9.29193 6.10315 9.91364C5.57593 10.1306 5.08533 10.4382 4.65442 10.8282C3.95215 11.4638 3.45093 12.2775 3.19861 13.1744C1.80884 11.8837 0.9375 10.0419 0.9375 8.00018C0.9375 4.1059 4.10571 0.937683 8 0.937683C11.8943 0.937683 15.0625 4.1059 15.0625 8.00018C15.0625 10.0421 14.1912 11.8839 12.8014 13.1745V13.1745Z"
                fill="#8B9298"
              />
            </svg>
            Profile
          </a>
          <a href="" className="side_bar_links">
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.05232 1.96245C3.7798 2.13486 3.51926 2.32465 3.27227 2.53026L3.59817 3.25624C4.11809 4.41439 3.18436 5.69956 1.92224 5.56297L1.12904 5.47714C1.01061 5.77386 0.910893 6.08003 0.831292 6.39423L1.52326 6.79092C2.62461 7.42227 2.62461 9.01082 1.52326 9.64217L0.831292 10.0389C0.910893 10.353 1.01061 10.6592 1.12904 10.956L1.92224 10.8701C3.18436 10.7335 4.11809 12.0187 3.59817 13.1769L3.27227 13.9029C3.51926 14.1084 3.7798 14.2982 4.05232 14.4706L4.64271 13.9357C5.58351 13.0834 7.09431 13.5743 7.35444 14.8168L7.51753 15.5958C7.67693 15.6061 7.83781 15.6113 8 15.6113C8.16219 15.6113 8.32307 15.6061 8.48246 15.5958L8.64556 14.8168C8.90569 13.5743 10.4165 13.0834 11.3573 13.9357L11.9477 14.4706C12.2202 14.2982 12.4807 14.1084 12.7277 13.9029L12.4018 13.1769C11.8819 12.0187 12.8156 10.7335 14.0777 10.8701L14.8709 10.956C14.9894 10.6592 15.0891 10.353 15.1687 10.0389L14.4767 9.64217C13.3754 9.01082 13.3754 7.42227 14.4767 6.79092L15.1687 6.39423C15.0891 6.08003 14.9894 5.77386 14.8709 5.47714L14.0777 5.56297C12.8156 5.69956 11.8819 4.41439 12.4018 3.25624L12.7277 2.53026C12.4807 2.32465 12.2202 2.13486 11.9477 1.96245L11.3573 2.49734C10.4165 3.3497 8.90569 2.8588 8.64556 1.61625L8.48246 0.837269C8.32307 0.827015 8.16219 0.821805 8 0.821805C7.83781 0.821805 7.67693 0.827015 7.51753 0.837269L7.35444 1.61625C7.09431 2.85881 5.58351 3.3497 4.64271 2.49734L4.05232 1.96245ZM4.58671 1.33791C4.3304 1.10569 3.95388 1.05546 3.66036 1.23838C3.32465 1.44761 3.00514 1.68037 2.70414 1.93438C2.44005 2.15723 2.37173 2.53047 2.51325 2.84571L2.8486 3.59274C3.10856 4.17181 2.6417 4.8144 2.01064 4.74611L1.19425 4.65776C0.850872 4.62061 0.517098 4.8007 0.386885 5.1206C0.239048 5.48377 0.116435 5.8599 0.0212399 6.24682C-0.0612443 6.58206 0.102927 6.92378 0.402447 7.0955L1.11463 7.50369C1.66531 7.81936 1.66531 8.61372 1.11463 8.9294L0.402447 9.33759C0.102927 9.50931 -0.0612443 9.85103 0.0212399 10.1863C0.116435 10.5732 0.239048 10.9493 0.386885 11.3125C0.517098 11.6324 0.850872 11.8125 1.19425 11.7753L2.01063 11.687C2.6417 11.6187 3.10856 12.2613 2.8486 12.8403L2.51325 13.5873C2.37173 13.9026 2.44005 14.2759 2.70414 14.4987C3.00514 14.7528 3.32465 14.9855 3.66036 15.1947C3.95388 15.3776 4.3304 15.3274 4.58671 15.0952L5.19437 14.5446C5.66477 14.1184 6.42015 14.364 6.55022 14.9852L6.71808 15.7869C6.78899 16.1255 7.06415 16.3875 7.40932 16.4121C7.60438 16.4259 7.80141 16.4329 8 16.4329C8.19859 16.4329 8.39562 16.4259 8.59067 16.4121C8.93584 16.3875 9.21101 16.1255 9.28192 15.7869L9.44978 14.9852C9.57984 14.364 10.3353 14.1184 10.8056 14.5446L11.4133 15.0952C11.6696 15.3274 12.0462 15.3776 12.3396 15.1947C12.6754 14.9855 12.9949 14.7528 13.2959 14.4987C13.5599 14.2759 13.6283 13.9026 13.4867 13.5873L13.1514 12.8403C12.8915 12.2613 13.3583 11.6187 13.9894 11.687L14.8058 11.7753C15.1491 11.8125 15.4829 11.6324 15.6131 11.3125C15.7609 10.9493 15.8835 10.5732 15.9788 10.1863C16.0612 9.85103 15.8971 9.50931 15.5975 9.33759L14.8854 8.9294C14.3347 8.61372 14.3347 7.81936 14.8854 7.50369L15.5975 7.0955C15.8971 6.92378 16.0612 6.58206 15.9788 6.24682C15.8835 5.8599 15.7609 5.48377 15.6131 5.1206C15.4829 4.8007 15.1491 4.62061 14.8058 4.65776L13.9894 4.74611C13.3583 4.8144 12.8915 4.17181 13.1514 3.59274L13.4867 2.84572C13.6283 2.53048 13.5599 2.15723 13.2959 1.93438C12.9949 1.68037 12.6754 1.44761 12.3396 1.23838C12.0462 1.05546 11.6696 1.10569 11.4133 1.33791L10.8056 1.88844C10.3353 2.31461 9.57984 2.06917 9.44978 1.44789L9.28192 0.646181C9.21101 0.307543 8.93584 0.045588 8.59067 0.0210785C8.39562 0.00721749 8.19859 0.000167847 8 0.000167847C7.80141 0.000167847 7.60438 0.00721749 7.40932 0.0210785C7.06415 0.045588 6.78899 0.307543 6.71808 0.646181L6.55022 1.44789C6.42015 2.06917 5.66477 2.31461 5.19437 1.88844L4.58671 1.33791Z"
                fill="#8B9298"
              />
            </svg>
            Settings
          </a>
        </nav>
        <nav id="side_bar_bottom">
          <p className="side_bar_bottomPara">Help & Support</p>
          <a href="" className="side_bar_bottomLinks">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="9" cy="9" r="8.25" stroke="#0047CC" strokeWidth="1.5" />
              <path
                d="M9.32773 10.4637H8.27731V9.95159C8.27731 9.55414 8.46219 9.20255 8.83193 8.89682C8.87115 8.86115 8.95798 8.78981 9.09244 8.6828C9.23249 8.5758 9.33053 8.49682 9.38655 8.44586C9.44818 8.3949 9.52101 8.32357 9.60504 8.23185C9.69468 8.13503 9.7563 8.04331 9.78992 7.95669C9.82913 7.87006 9.84874 7.77834 9.84874 7.68153C9.84874 7.46752 9.7619 7.29172 9.58824 7.15414C9.41457 7.01147 9.19888 6.94013 8.94118 6.94013C8.52101 6.94013 8.10084 7.15669 7.68067 7.58981L7 6.90191C7.54342 6.30064 8.21849 6 9.02521 6C9.59104 6 10.0616 6.15541 10.437 6.46624C10.8123 6.77197 11 7.15924 11 7.62803C11 8.07134 10.8011 8.45605 10.4034 8.78217C10.3529 8.82803 10.2353 8.92229 10.0504 9.06497C9.87115 9.20764 9.7451 9.3121 9.67227 9.37834C9.59944 9.44459 9.52381 9.53885 9.44538 9.66115C9.36695 9.77834 9.32773 9.89045 9.32773 9.99745V10.4637ZM8.81513 12C8.63025 12 8.47339 11.9439 8.34454 11.8318C8.21569 11.7197 8.15126 11.5796 8.15126 11.4115C8.15126 11.2433 8.21569 11.1032 8.34454 10.9911C8.47339 10.879 8.63025 10.8229 8.81513 10.8229C8.9944 10.8229 9.14566 10.879 9.26891 10.9911C9.39776 11.1032 9.46218 11.2433 9.46218 11.4115C9.46218 11.5796 9.39776 11.7197 9.26891 11.8318C9.14566 11.9439 8.9944 12 8.81513 12Z"
                fill="#0047CC"
              />
            </svg>
            FAQ's
          </a>
          <a href="" className="side_bar_bottomLinks">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1.44338 10.1792C1.58084 9.83926 1.96792 9.67494 2.30792 9.81247C2.64795 9.94993 2.81217 10.337 2.67471 10.677L1.89262 12.6116L4.21544 11.5877C4.38358 11.5136 4.57493 11.5124 4.74393 11.5845C5.53775 11.9232 6.38815 12.0949 7.27148 12.0949C10.8266 12.0949 13.2148 9.31137 13.2148 6.71153C13.2148 3.74311 10.5487 1.32812 7.27148 1.32812C3.9943 1.32812 1.32813 3.74311 1.32813 6.71153C1.32813 6.94313 1.34971 7.22044 1.38727 7.47232C1.44139 7.83506 1.1912 8.17297 0.828459 8.22709C0.465681 8.28134 0.127773 8.03102 0.0736847 7.66828C0.0261726 7.34986 7.62939e-06 7.01006 7.62939e-06 6.71153C7.62939e-06 4.90761 0.763878 3.21499 2.151 1.94547C3.52169 0.690922 5.34019 0 7.27148 0C9.20277 0 11.0212 0.690922 12.392 1.94543C13.6315 3.07992 14.3729 4.55241 14.5167 6.14014C16.0758 7.17263 17 8.8271 17 10.6092C17 11.7224 16.6493 12.7787 15.9816 13.6877L16.9516 16.087C17.0529 16.3376 16.9922 16.6245 16.7981 16.8127C16.6717 16.9353 16.505 17 16.3358 17C16.2454 17 16.1542 16.9815 16.0681 16.9436L13.2714 15.7107C12.5679 15.9726 11.8243 16.1052 11.0567 16.1052C11.0401 16.1052 11.0238 16.1039 11.0075 16.1027C9.89724 16.0943 8.81791 15.8023 7.88311 15.2558C7.0458 14.7662 6.35703 14.0937 5.87416 13.2996C5.40271 13.2149 4.94192 13.087 4.49467 12.916L0.931952 14.4865C0.845789 14.5245 0.754648 14.543 0.664236 14.543C0.494999 14.5429 0.32832 14.4783 0.201851 14.3556C0.00777817 14.1675 -0.0528831 13.8806 0.048418 13.63L1.44338 10.1792ZM11.0566 14.7754C11.0657 14.7754 11.0745 14.7764 11.0835 14.7767C11.7616 14.7733 12.4142 14.64 13.0237 14.3799C13.1927 14.3078 13.384 14.309 13.5522 14.3831L15.1073 15.0686L14.6056 13.8276C14.5129 13.5982 14.5554 13.3363 14.7159 13.148C15.3413 12.4143 15.6719 11.5364 15.6719 10.6092C15.6719 9.54801 15.2254 8.54252 14.4444 7.78011C14.2012 9.10574 13.5151 10.3738 12.48 11.37C11.192 12.6096 9.48838 13.3277 7.64877 13.4141C8.51244 14.2643 9.7484 14.7754 11.0566 14.7754Z"
                fill="#0047CC"
              />
              <path
                d="M7.30469 7.40429C6.93794 7.40429 6.64063 7.10698 6.64063 6.74023C6.64063 6.37348 6.93794 6.07617 7.30469 6.07617C7.67144 6.07617 7.96875 6.37348 7.96875 6.74023C7.96875 7.10698 7.67144 7.40429 7.30469 7.40429Z"
                fill="#0047CC"
              />
              <path
                d="M4.64844 7.40429C4.28169 7.40429 3.98438 7.10698 3.98438 6.74023C3.98438 6.37348 4.28169 6.07617 4.64844 6.07617C5.01519 6.07617 5.3125 6.37348 5.3125 6.74023C5.3125 7.10698 5.01519 7.40429 4.64844 7.40429Z"
                fill="#0047CC"
              />
              <path
                d="M9.96094 7.40429C9.59419 7.40429 9.29688 7.10698 9.29688 6.74023C9.29688 6.37348 9.59419 6.07617 9.96094 6.07617C10.3277 6.07617 10.625 6.37348 10.625 6.74023C10.625 7.10698 10.3277 7.40429 9.96094 7.40429Z"
                fill="#0047CC"
              />
            </svg>
            Talk to someone
          </a>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;