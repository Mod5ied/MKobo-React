import React from 'react'

function Header() {
  return (
    <>
    <header id="header_main">
          <div id="header_icon">
            {/* these are large SVGs below. Do wrap them in ur editor for better visibility of code. */}
            <svg width="98" height="40" viewBox="0 0 98 63" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M78.0517 29.5062H67.7749C67.7749 10.5168 49.3919 10.2989 48.6089 10.2989C29.6603 10.2989 29.4428 28.7215 29.4428 29.5062H19.166C19.166 10.5168 0.783045 10.2989 0 10.2989V0C7.87994 0 18.3158 3.48257 24.414 12.1978C28.9461 5.37974 36.6794 0 48.6089 0C56.4888 0 66.9247 3.48257 73.0229 12.1978C77.555 5.38151 85.2883 0 97.2178 0V10.2989C78.2691 10.2989 78.0517 28.7215 78.0517 29.5062Z"
                fill="#0047CC"
              />
              <path
                d="M23.5052 62.416V52.9089C23.5052 50.0073 22.1537 46.6119 18.1872 46.6119C16.0129 46.6119 14.4851 47.6306 13.5155 49.2357C12.6928 47.5688 11.2237 46.6119 9.10827 46.6119C6.90466 46.6119 5.4062 47.8775 4.73042 49.1739H4.67166V47.0441H0V62.416H4.84795V54.0818C4.84795 52.2298 5.72939 50.779 7.25723 50.779C8.69693 50.779 9.34332 51.8902 9.34332 53.6497V62.416H14.1619V54.1127C14.1619 52.3841 14.9552 50.779 16.6006 50.779C18.3047 50.779 18.6866 52.2606 18.6866 54.0201V62.416H23.5052Z"
                fill="#0047CC"
              />
              <path
                d="M36.9863 53.9892L42.6275 47.0441H36.7806L32.1089 53.2793H32.0208V39.0804H27.1728V62.416H32.0208V55.0387H32.1089L36.8981 62.416H42.8626L36.9863 53.9892Z"
                fill="#0047CC"
              />
              <path
                d="M59.3562 54.6683C59.3562 49.6369 55.6541 46.5502 51.2175 46.5502C46.8103 46.5502 43.1082 49.6369 43.1082 54.6683C43.1082 59.6996 46.8103 62.9098 51.2175 62.9098C55.6541 62.9098 59.3562 59.6996 59.3562 54.6683ZM54.7139 54.6683C54.7139 56.6438 53.5092 58.6502 51.2469 58.6502C48.9845 58.6502 47.7798 56.6438 47.7798 54.6683C47.7798 52.6928 48.9551 50.7482 51.2175 50.7482C53.4799 50.7482 54.7139 52.6928 54.7139 54.6683Z"
                fill="#0047CC"
              />
              <path
                d="M78.7138 54.6683C78.7138 50.3778 76.0694 46.6119 71.8091 46.6119C69.6642 46.6119 68.1658 47.6614 67.3431 48.6801H67.2843V39.0804H62.4658V62.416H66.9024V60.4096H66.9611C67.9014 61.953 69.8112 62.8481 71.7503 62.8481C76.1576 62.8481 78.7138 58.9588 78.7138 54.6683ZM74.0715 54.6683C74.0715 56.6747 72.8962 58.6502 70.6045 58.6502C68.4302 58.6502 67.0787 56.7055 67.0787 54.6992C67.0787 52.7545 68.4302 50.7482 70.6045 50.7482C72.8962 50.7482 74.0715 52.6928 74.0715 54.6683Z"
                fill="#0047CC"
              />
              <path
                d="M97.2881 54.6683C97.2881 49.6369 93.5861 46.5502 89.1495 46.5502C84.7422 46.5502 81.0402 49.6369 81.0402 54.6683C81.0402 59.6996 84.7422 62.9098 89.1495 62.9098C93.5861 62.9098 97.2881 59.6996 97.2881 54.6683ZM92.6459 54.6683C92.6459 56.6438 91.4412 58.6502 89.1788 58.6502C86.9165 58.6502 85.7118 56.6438 85.7118 54.6683C85.7118 52.6928 86.8871 50.7482 89.1495 50.7482C91.4118 50.7482 92.6459 52.6928 92.6459 54.6683Z"
                fill="#0047CC"
              />
            </svg>
            <p id="header_icon_para">Microfinance Bank</p>
          </div>
          <div id="header_center">
            <h1>MY DASHBOARD</h1>
          </div>
          <div id="header_profile">
            <span>
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0.635162 15.4908V15.4906C0.635286 15.3934 0.656119 15.2972 0.696276 15.2087C0.736292 15.1204 0.794582 15.0416 0.867291 14.9775C1.38939 14.5036 1.84603 13.9623 2.22515 13.3678C2.64409 12.5469 2.89551 11.6508 2.96476 10.7317L2.96476 7.97023C2.96476 7.97019 2.96476 7.97015 2.96476 7.97011V7.96998H3.08976C3.08681 6.50594 3.61453 5.09044 4.57518 3.98564C5.53583 2.88084 6.86431 2.16162 8.31456 1.96118L0.635162 15.4908ZM0.635162 15.4908V16.2524C0.635162 16.4341 0.707332 16.6083 0.835794 16.7367C0.964256 16.8652 1.13849 16.9374 1.32016 16.9374H16.8882C17.0698 16.9374 17.2441 16.8652 17.3725 16.7367C17.501 16.6083 17.5732 16.4341 17.5732 16.2524V15.4908V15.4906C17.573 15.3934 17.5522 15.2972 17.512 15.2087C17.472 15.1202 17.4135 15.0413 17.3406 14.9772C16.8107 14.5047 16.3465 13.9633 15.9606 13.3674M0.635162 15.4908L15.9606 13.3674M15.2212 7.97029C15.2249 6.46457 14.6788 5.00929 13.6852 3.87788C12.7159 2.77409 11.386 2.05267 9.93476 1.84092V1.22758C9.93476 0.996152 9.84283 0.774203 9.67918 0.610559C9.51554 0.446915 9.29359 0.35498 9.06216 0.35498C8.83073 0.35498 8.60878 0.446915 8.44514 0.610559C8.2815 0.774203 8.18956 0.996153 8.18956 1.22758V1.85324L15.0962 7.96998M15.2212 7.97029L15.0962 7.96998M15.2212 7.97029V7.96998H15.0962M15.2212 7.97029V10.7317M15.0962 7.96998V10.7364M15.2212 10.7317C15.221 10.7302 15.2209 10.7286 15.2208 10.7271L15.0962 10.7364M15.2212 10.7317C15.2904 11.6506 15.5417 12.5466 15.9606 13.3674M15.2212 10.7317V10.7364H15.0962M15.0962 10.7364L15.9606 13.3674M14.8168 14.0791C15.1547 14.6144 15.5468 15.1131 15.9869 15.5674H2.22702C2.6671 15.1131 3.05924 14.6144 3.39707 14.0791L3.39735 14.0793L3.40165 14.0712C3.9503 13.0426 4.27042 11.9076 4.34014 10.7439L4.34036 10.7439V10.7364V7.96998H4.34043L4.34029 7.96575C4.31865 7.32621 4.42592 6.68886 4.65573 6.09164C4.88553 5.49443 5.23317 4.94956 5.67793 4.48949C6.12269 4.02942 6.65549 3.66356 7.24459 3.41369C7.83369 3.16382 8.46706 3.03505 9.10696 3.03505C9.74686 3.03505 10.3802 3.16382 10.9693 3.41369C11.5584 3.66356 12.0912 4.02942 12.536 4.48949C12.9808 4.94956 13.3284 5.49443 13.5582 6.09164C13.788 6.68886 13.8953 7.32621 13.8736 7.96575L13.8736 7.96575V7.96998V10.7364H13.8733L13.8738 10.7439C13.9435 11.9076 14.2636 13.0426 14.8123 14.0712L14.812 14.0714L14.8168 14.0791Z"
                  fill="#EFF2F8"
                  stroke="#EFF2F8"
                  strokeWidth="0.25"
                />
              </svg>
              <svg
                width="18"
                height="20"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                /* xmlns:xlink="http://www.w3.org/1999/xlink" */
              >
                <circle cx="15.5" cy="15.5" r="15.5" fill="url(#pattern0)" />
                <defs>
                  <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    {/* <use xlinkHref="#image0_1_367" transform="translate(0 -0.28625) scale(0.0025)" /> */}
                  </pattern>
                  <image
                    id="image0_1_367"
                    width="400"
                    height="629"
                  />
                </defs>
              </svg>
              <p id="header_profile_para">
                Benedict Ulinfo
                <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L6 6L11 1" stroke="white" />
                </svg>
              </p>
            </span>
          </div>
        </header>
    </>
  )
}

export default Header