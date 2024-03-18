import React from 'react'
import alb1 from '../photo/thumb1.jpg';
import alb2 from '../photo/thumb2.jpg';
import alb3 from '../photo/thumb3.jpg';
import alb4 from '../photo/about-4.jpg';

const Topics = () => {
  return (
    <div class="container my-4 ">
        <div class="row mb-2">
            <div class="col-md-6 p2">
              <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div class="col p-4 d-flex flex-column position-static">
                  <strong class="d-inline-block mb-2 text-primary">World</strong>
                  <h3 class="mb-0">Global Conferences</h3>
                  <div class="mb-1 text-muted">Nov 12</div>
                  <p class="card-text mb-auto ">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                </div>
                <div class="col-auto d-none d-lg-block">
                    <img src={alb1} class="bd-placeholder-img" width="200" height="250" alt="" />
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div class="col p-4 d-flex flex-column position-static">
                  <strong class="d-inline-block mb-2 text-success">Design</strong>
                  <h3 class="mb-0">Learn Designing</h3>
                  <div class="mb-1 text-muted">Nov 11</div>
                  <p class="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                </div>
                <div class="col-auto d-none d-lg-block">
                <img src={alb2} class="bd-placeholder-img" width="200" height="250" alt="" />
                </div>
              </div>
            </div>
          </div>


        <div class="row mb-2">
            <div class="col-md-6 p2">
              <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div class="col p-4 d-flex flex-column position-static">
                  <strong class="d-inline-block mb-2 text-danger">FrontEnd</strong>
                  <h3 class="mb-0"> Templates</h3>
                  <div class="mb-1 text-muted">Nov 12</div>
                  <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                </div>
                <div class="col-auto d-none d-lg-block">
                <img src={alb3} class="bd-placeholder-img" width="200" height="250" alt="" />
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div class="col p-4 d-flex flex-column position-static">
                  <strong class="d-inline-block mb-2 text-warning">Python</strong>
                  <h3 class="mb-0">Learn Python</h3>
                  <div class="mb-1 text-muted">Nov 11</div>
                  <p class="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                </div>
                <div class="col-auto d-none d-lg-block">
                <img src={alb4} class="bd-placeholder-img" width="200" height="250" alt="" />
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Topics