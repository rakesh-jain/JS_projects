import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

const profile = [
  {
    img: "https://docs.material-tailwind.com/img/team-3.jpg",
    name: "Natlie Paisley",
    title: "CEO / Founder",
  },
  {
    img: "https://docs.material-tailwind.com/img/team-3.jpg",
    name: "John Doe",
    title: "CTO / Co-Founder",
  },
  {
    img: "https://docs.material-tailwind.com/img/team-3.jpg",
    name: "Jane Smith",
    title: "Lead Designer",
  },
];

const ProfileCard = ({ img, name, title }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="w-72 p-4 rounded-3xl shadow-lg bg-white backdrop-blur-md border border-b-amber-50 hover:shadow-2xl transition-all">
        <CardHeader floated={false} className="w-32 h-32 mx-auto">
          <img src={img} alt="profile-picture" className="h-full w-full object-cover rounded-full" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {name}
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            {title}
          </Typography>
        </CardBody>
        <CardFooter className="flex justify-center gap-4">
          <Tooltip content="Like">
            <Typography as="a" href="#facebook" variant="lead" color="blue">
              <i className="fab fa-facebook" />
            </Typography>
          </Tooltip>
          <Tooltip content="Follow">
            <Typography as="a" href="#twitter" variant="lead" color="light-blue">
              <i className="fab fa-twitter" />
            </Typography>
          </Tooltip>
          <Tooltip content="Follow">
            <Typography as="a" href="#instagram" variant="lead" color="purple">
              <i className="fab fa-instagram" />
            </Typography>
          </Tooltip>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

function ProfileCards() {
  return (
    <div className="flex flex-row items-center gap-6 overflow-x-auto p-4">
      {profile.map((card, index) => (
        <ProfileCard key={index} {...card} />
      ))}
    </div>
  );
}

export default ProfileCards;
