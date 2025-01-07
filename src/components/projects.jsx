import { motion } from "framer-motion";

const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

const Projects = () => {
  return (
    <motion.div
      className="bg-white border-zinc-200 border rounded-lg flex flex-col"
      transition={transition}
      variants={variants}
    >
      <div className="w-full p-3 border-dotted border-spacing-2 border-x-0 border border-t-0 border-b-1 border-b-gray-400">
        <p className="font-sans font-medium ">Projects</p>
      </div>
      <div className="p-3  text-gray-600 flex flex-col gap-3">
        <div className="flex justify-between flex-col gap-1">
          <p className="font-semibold text-muted-foreground">
            The Cloud Resume Challenge
          </p>
          <p className="font-extralight text-sm leading-relaxed">
            My attempt at the famous{" "}
            <a
              href="https://cloudresumechallenge.dev/docs/the-challenge/aws/"
              className="text-blue-500 font-medium"
            >
              Cloud Resume Challenge
            </a>{" "}
            by
            <a
              href="https://forrestbrazeal.com/"
              className="text-blue-500 font-medium"
            >
              {" "}
              Forrest Brazeal
            </a>{" "}
            <br />
            <span className="font-medium">Tools used:</span> Terraform, S3,
            CloudFront, Lambda, API Gateway, DynamoDB, CloudWatch, CI/CD.
          </p>
          <div className="flex">
            <a
              className="text-xs font-light text-blue-500"
              href="https://github.com/vishnumohanan404/crc-portfolio"
            >
              Github
            </a>
            <div className="border-l h-4 mx-2"></div>
            <a
              className="text-xs font-light text-blue-500"
              href="https://vishnuverse.xyz/"
            >
              Live
            </a>
          </div>
        </div>
        <div className="flex justify-between flex-col gap-1">
          <p className="font-semibold text-muted-foreground">
            The K8s Resume Challenge
          </p>
          <p className="font-extralight text-sm leading-relaxed">
            My attempt at the famous{" "}
            <a
              href="https://cloudresumechallenge.dev/docs/extensions/kubernetes-challenge/"
              className="text-blue-500 font-medium"
            >
              K8s Resume Challenge
            </a>{" "}
            by
            <a
              href="https://forrestbrazeal.com/"
              className="text-blue-500 font-medium"
            >
              {" "}
              Forrest Brazeal
            </a>{" "}
            <br />
            <span className="font-medium">Tools used:</span> Docker, Kubernetes,
            Civo K8s, Helm, Traefik-Ingress, Cert-Manager
          </p>
          <div className="flex">
            <a
              className="text-xs font-light text-blue-500"
              href="https://github.com/vishnumohanan404/k8s-resume-chlg/tree/main"
            >
              Github
            </a>
          </div>
        </div>
        <div className="flex justify-between flex-col gap-1">
          <p className="font-semibold text-muted-foreground">
            FormInIt: A form builder app deployed on Civo Cluster
          </p>
          <p className="font-extralight text-sm leading-relaxed">
            A simple modern form builder in MERN stack, advanced CICD, IaC and
            Containerization practices
            <br /> <span className="font-medium">Tools used:</span> Terraform,
            Civo K8s, Traefik-Ingress, Cert-Manager, Prometheus.
          </p>
          <div className="flex">
            <a
              className="text-xs font-light text-blue-500"
              href="https://github.com/vishnumohanan404/forminit"
            >
              Github
            </a>
            <div className="border-l h-4 mx-2"></div>
            <a
              className="text-xs font-light text-blue-500"
              href="https://github.com/vishnumohanan404/forminit-infra"
            >
              Infra
            </a>
            <div className="border-l h-4 mx-2"></div>
            <a
              className="text-xs font-light text-blue-500"
              href="https://forminit.vishnuverse.xyz/"
            >
              Live
            </a>
          </div>
        </div>
        <div className="flex justify-between flex-col gap-1">
          <p className="font-semibold text-muted-foreground">
            Full Stack Microservices App in GKE
          </p>
          <p className="font-extralight text-sm leading-relaxed">
            A nodeJS full stack microservices app for ticket selling online.
            <br /> <span className="font-medium">Tools used:</span> Terraform,
            Docker, K8s, Cert-Manager, Nginx-Ingress, GitHub Actions
          </p>
          <a
            className="text-xs font-light text-blue-500"
            href="https://github.com/vishnumohanan404/ticketing"
          >
            Github
          </a>
        </div>
        <div className="flex justify-between flex-col gap-1">
          <p className="font-semibold text-muted-foreground">
            Python App deployed in AWS using Terraform and Jenkins
          </p>
          <p className="font-extralight text-sm leading-relaxed">
            A Python app on AWS EC2 connects to an{" "}
            <span className="font-medium">RDS</span> database in a private
            subnet <br /> <span className="font-medium">Tools used:</span>{" "}
            Terraform, Jenkins, ALB, Route 53, AWS Certificate Manager, S3.
          </p>
          <div>
            <a
              className="text-xs font-light text-blue-500 "
              href="https://github.com/vishnumohanan404/tfp1-infra/tree/main"
            >
              Github
            </a>
          </div>
        </div>
        <div className="flex justify-between flex-col gap-1">
          <p className="font-semibold text-muted-foreground">
            Terraform for AWS provisioning
          </p>
          <p className="font-extralight text-sm leading-relaxed">
            A React application deployed on AWS EC2 with security groups.
            <br /> <span className="font-medium">Tools used:</span> Terraform,
            Jenkins SonarQube, Trivy
          </p>
          <a
            className="text-xs font-light text-blue-500"
            href="https://github.com/vishnumohanan404/amazon-fe"
          >
            Github
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
