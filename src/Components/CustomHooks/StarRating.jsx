import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function StarRating({ value, size }) {
  const [hover, setHover] = useState(0);
  const [rating, setRating] = useState(0);
  return (
    <>
      <div className="flex">
        {[...Array(5)].map((_, index) => {
          return (
            <FaStar
              key={index}
              onClick={() => setRating(index)}
              onMouseMove={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
              style={{
                color: `${index >= value ? "#000000aa" : ""}`,
              }}
              size={size}
            />
          );
        })}
      </div>
    </>
  );
}
// export default
//     </>
//   );
// }
