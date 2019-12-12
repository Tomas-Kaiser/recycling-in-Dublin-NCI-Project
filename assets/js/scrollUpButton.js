// IFFE
(function () {
   // Declare btn class variables
   const SCROLL_TOP_BTN_CLASSNAME = "scroll-top-btn";
   const SCROLL_TOP_BTN_CLASSNAME_SHOW = "scroll-top-btn show"
   const FA_ARROW_UP_CLASS = "fa fa-arrow-circle-up";

   // Create an element button
   let scrollTopBtn = document.createElement("button");
   // Create an elemnt i for
   let iArrowUp = document.createElement("i");

   // Set the class to the element
   scrollTopBtn.setAttribute("class", SCROLL_TOP_BTN_CLASSNAME);
   // Set the class to the i
   iArrowUp.setAttribute("class", FA_ARROW_UP_CLASS);

   // Append to the document
   document.body.appendChild(scrollTopBtn);
   scrollTopBtn.appendChild(iArrowUp);

   // Set func for scroll up smoothly
   const scrollUpSmoothly = (e) => window.scrollTo({ top: 20, behavior: "smooth" });

   // Set event listener for scrolling up
   scrollTopBtn.addEventListener("click", scrollUpSmoothly);

   // Set to show and hide the button
   document.addEventListener("scroll", function () {

      const hide = () => scrollTopBtn.setAttribute("class", SCROLL_TOP_BTN_CLASSNAME);
      const show = () => scrollTopBtn.setAttribute("class", SCROLL_TOP_BTN_CLASSNAME_SHOW);

      if (document.scrollingElement.scrollTop >= 400) {
         if (scrollTopBtn.className === SCROLL_TOP_BTN_CLASSNAME) {
            show();
         }
      } else if (scrollTopBtn.className === SCROLL_TOP_BTN_CLASSNAME_SHOW) {
         hide();
      }
   });
})();