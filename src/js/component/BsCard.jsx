import React from "react";
const BootstrapCard = ({ img, description }) => {
return (
<div className="col">
<div className="card "> <img src={img} className="card-img-top" alt="..
"></img>
<div className="card-body"> <h5 className="card-title">Card title</h5> <p className="card-text">{description}</p>
</div>
<div class="card-footer">

<a href="#"

className="  btn btn-primary justify-content-center align-items-center p-0 d-flex"
> Click aqui

</a> </div>
</div> </div>

);
};

export default BootstrapCard;
