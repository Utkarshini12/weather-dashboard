export const DataCard = ({ title, icon, data, image, measure }) => {
  return (
    <div className="col-sm-12 col-md-3  my-2">
      <div className="glass-card p-2">
        <div className=" d-flex align-items-center justify-content-around">
          <div>
            <div className="d-flex justify-content-start align-items-center px-2">
              <i class={`bi bi-${icon} text-secondary px-1`}></i>
              <h5 className="text-capitalize text-start text-white-50 pt-1 ">{title}</h5>
            </div>
            <h5 className="text-capitalize text-start text-light fw-bolder px-2">
              {data} {measure}
            </h5>
          </div>

          <img src={image} alt="weather icon" height={70} width={70} />
        </div>
      </div>
    </div>
  );
};
