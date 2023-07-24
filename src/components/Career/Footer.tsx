import React from 'react'

const Footer: React.FC = () => {
  return (
    <div>
         <footer>
        {/*Footer Links*/}
        <div className="container">
          {/* Footer links */}
          <div className="d-none d-md-block">
            <div className="row">
              <div className="col-md-4 col-lg-4 d-none d-md-block mb-0">
                <p className="pt-3">
                  {" "}
                  © 2023 Copyright:{" "}
                  <a className="text-dark" href="#">
                    <strong>Meristem</strong>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer