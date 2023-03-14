
import React from "react";

import Home from "./home.jsx";
import BootstrapCard from "./BsCard.jsx";


const Card = ( ) => {
return (
<div className="row row-cols-1 row-cols-md-4 g-4 m-5 " >
{/* Carta 1*/}
<BootstrapCard
img={"https://picsum.photos/202/100"}
description="This is a longer card with supporting text below as a natural
lead-in to additional content. This content is a little bit longer."
/>
{/* Carta 2*/}
<BootstrapCard
img={"https://picsum.photos/201/100"}
description="This is a longer card with supporting text below as a natural
lead-in to additional content. This content is a little bit longer."
/>
{/* Carta 3*/}
<BootstrapCard
img={"https://picsum.photos/203/100"}
description="This is a longer card with supporting text below as a natural
lead-in to additional content. This content is a little bit longer."
/>
{/* Carta 4*/}
<BootstrapCard
img={"https://picsum.photos/200/100"}
description="This is a longer card with supporting text below as a natural
lead-in to additional content. This content is a little bit longer."
/>
</div>
);
};
export default Card;



