import React from "react";

const Projects = () => {
  return (
    <div className="bg-white border-zinc-200 border rounded-lg flex flex-col">
      <div className="w-full p-3 border-dotted border-spacing-2 border-x-0 border border-t-0 border-b-1 border-b-gray-400">
        <p className="font-sans font-medium ">Projects</p>
      </div>
      <div className="p-3  text-gray-600 flex flex-col gap-3">
        {/* 1 */}
        <div className="flex justify-between flex-col gap-1">
          <p className="font-semibold text-muted-foreground">
            Cloud Resume Challenge by Forrest Brazeal
            {/* <span className="text-xs font-light ml-2 pl-1 border-l-2"> </span> */}
          </p>
          <p className="font-extralight text-sm leading-relaxed">
            The Cloud Resume Challenge involves tasks to enhance AWS skills,
            using S3 and CloudFront for frontend hosting, Lambda and API Gateway
            for the API, DynamoDB for the database, and CloudWatch for logging.
            It also includes using Terraform for infrastructure and CI/CD for
            automating deployments.
          </p>
          <a
            className="text-xs font-light text-blue-500"
            href="https://github.com/vishnumohanan404/crc-portfolio"
          >
            Github
          </a>
        </div>
        <div className="flex justify-between flex-col gap-1">
          <p className="font-semibold text-muted-foreground">
            Python App deployed in AWS using Terraform and Jenkins
            {/* <span className="text-xs font-light ml-2 pl-1 border-l-2"> </span> */}
          </p>
          <p className="font-extralight text-sm leading-relaxed">
            A Python application is deployed on AWS EC2 with an{" "}
            <span className="font-medium">RDS</span> MySQL database. Terraform
            provisions the infrastructure, and Jenkins handles CI/CD. The
            application and Jenkins run on separate EC2 instances provisioned by
            Terraform. The RDS instance is in a private subnet for security.
            Additional technologies used include a
            <span className="font-medium"> load balancer</span>, hosted zone,
            certificate manager, and S3 for the Terraform backend.
          </p>
          <a
            className="text-xs font-light text-blue-500"
            href="https://github.com/vishnumohanan404/tfp1-infra/tree/main"
          >
            Github
          </a>
        </div>
        {/* 2 */}
        <div className="flex justify-between flex-col gap-1">
          <p className="font-semibold text-muted-foreground">
            Terraform for AWS provisioning
            {/* <span className="text-xs font-light ml-2 pl-1 border-l-2"> </span> */}
          </p>
          <p className="font-extralight text-sm leading-relaxed">
            A React application deployed in AWS using terraform for
            infrastructure provisioning, including security groups and ec2
            instance. Jenkins for running multi-stage pipelines including{" "}
            <span className="font-medium">SonarQube</span> and{" "}
            <span className="font-medium">Trivy</span>
          </p>
          <a
            className="text-xs font-light text-blue-500"
            href="https://github.com/vishnumohanan404/amazon-fe"
          >
            Github
          </a>
        </div>
        {/* 3 */}
        <div className="flex justify-between flex-col gap-1">
          <p className="font-semibold text-muted-foreground">
            Full Stack Microservices App in GKE
          </p>
          <p className="font-extralight text-sm leading-relaxed">
            A nodeJS full stack microservices app for ticket selling online,
            containerized using
            <span className="font-medium"> Docker and Kubernetes</span> and
            deployed in GKE with multi-stage pipelines for testing and building
            using Github Actions
          </p>
          <a
            className="text-xs font-light text-blue-500"
            href="https://github.com/vishnumohanan404/ticketing"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
