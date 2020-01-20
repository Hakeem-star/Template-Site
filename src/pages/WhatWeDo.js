import React, { Component } from "react";

function WhatWeDo() {
  return (
    <div id="what_we_do">
      <div className="bg _1"></div>
      <div className="bg _2"></div>

      <div className="_left"></div>
      <div className="_right">
        <div className="_head">
          <p>What we do</p>
        </div>
        <div className="_subHeadBlock top right">
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="_content_container">
          <div className="_brand">
            <div className="_title">Brand Identity</div>
            <div className="_dash"></div>
            <div className="_article">
              Your brand is the cornerstone of your company. Our responsibility
              is to find unique and relevent truth about you, envelop ourselves
              in your story, and find the best way to henestly relate it to your
              audience. From the creation of the identity to the development of
              the brand system, our aim is to create a truly holistic brand
              experience. Once we've created your logo, all facets of your brand
              grow organically, eminating seamlessly and consistently through
              all pieces of collateral and touch-points.
            </div>
          </div>
          <div className="_products">
            <div className="_image">
              <img src="" alt="" />
            </div>
            <div className="_dash"></div>
            <div className="container">
              <div className="_title"> Products & Services</div>
              <div className="_article">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
                iusto assumenda reiciendis minima at sint nulla beatae tempora
                alias sequi ea deleniti culpa ipsum, officiis labore corporis
                mollitia fuga voluptates deserunt. Illo ullam fugit tempora
                alias exercitationem vel ratione molestiae!
              </div>
            </div>
          </div>
        </div>
        <div className="_subHeadBlock mid left">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="_strategy">
          <div className="_title">Strategy</div>
          <div className="_dash"></div>
          <div className="_article">
            Consultation, thoughtful feedback, and redirection for existing
            brands. Maybe you have a stellar brand in place, but your brand
            extensions are without clear direction. We can help provide guidance
            and councel to ensure that all brand touch-points are faithfully
            executed across all mediums.
          </div>
        </div>
      </div>

      <div className="_partners">
        <div className="title">
          <p>Partners</p>
        </div>
        <div className="container">
          <div className="_labels">
            <p className="sales">Sales</p> <div className="_window"></div>
          </div>
          <div className="_labels">
            <p className="pr">Pr & Marketing</p>
            <div className="_window"></div>
          </div>
          <div className="_labels">
            <p className="video">Video & Animation</p>
            <div className="_window"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WhatWeDo;
