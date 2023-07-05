import React, { useState } from "react";
import {
  Collapse,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import profile1 from "../Photo/Swafoto.2.jpg";
import profile2 from "../Photo/IMG_20220711_192310_edit_240758458691386.png";

export default function AboutUs() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const toggleOpen1 = () => setOpen1((cur) => !cur);
  const toggleOpen2 = () => setOpen2((cur) => !cur);

  return (
    <div className="flex justify-center items-center h-screen bg-slate-100">
      <Card className="w-96 mx-4 bg-white overflow-hidden shadow-lg">
        <CardHeader color="blue-gray" className="relative">
          <img
            src={profile1}
            alt="img-blur-shadow"
            layout="fill"
            className="object-contain h-96 rounded-3xl mx-auto"
          />
        </CardHeader>
        <CardBody>
          <Typography
            variant="h5"
            color="blue-gray"
            className="flex justify-center my-2"
          >
            Muhamad Adnan Fadillah
          </Typography>
          <Typography
            variant="h5"
            color="blue-gray"
            className="flex justify-center my-2"
          >
            2207411048
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <div className="flex justify-center my-4">
            <a onClick={toggleOpen1}>
              Show More
            </a>
          </div>
          <Collapse open={open1}>
            <Card className="my-4 mx-auto w-8/12">
              <CardBody>
                <Typography>
                  Use our Tailwind CSS collapse for your website. You can use if
                  for accordion, collapsible items and much more.
                </Typography>
              </CardBody>
            </Card>
          </Collapse>
        </CardFooter>
      </Card>
      <Card className="w-96 mx-4 bg-white overflow-hidden shadow-lg">
        <CardHeader color="blue-gray" className="relative">
          <img
            src={profile2}
            alt="img-blur-shadow"
            layout="fill"
            className="object-contain h-96 rounded-3xl mx-auto"
          />
        </CardHeader>
        <CardBody>
        <Typography
            variant="h5"
            color="blue-gray"
            className="flex justify-center my-2"
          >
            Juan Graciano
          </Typography>
          <Typography
            variant="h5"
            color="blue-gray"
            className="flex justify-center my-2"
          >
            2207411040
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <div className="flex justify-center my-4">
            <a onClick={toggleOpen2}>
              Show More
            </a>
          </div>
          <Collapse open={open2}>
            <Card className="my-4 mx-auto w-8/12">
              <CardBody>
                <Typography>
                  Use our Tailwind CSS collapse for your website. You can use if
                  for accordion, collapsible items and much more.
                </Typography>
              </CardBody>
            </Card>
          </Collapse>
        </CardFooter>
      </Card>
    </div>
  );
}
