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
            Python App deployed in AWS using Terraform and Jenkins
            <span className="text-xs font-light ml-2 pl-1 border-l-2"> </span>
          </p>
          <p className="font-extralight text-sm">
            A python application deployed in AWS ec2 with{" "}
            <span className="font-medium">RDS</span> for mysql database,
            terraform for infrastructure provisioning, and Jenkins for CICD.
            Both application and jenkins server running on separate EC2
            instances provisioned by terraform. RDS instance is deployed in a
            private subnet for securing database, loadbalancer, hosted zone,
            certificate manager and s3 for terraform backend are other tech used
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
            <span className="text-xs font-light ml-2 pl-1 border-l-2"> </span>
          </p>
          <p className="font-extralight text-sm">
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
          <p className="font-extralight text-sm">
            A nodeJS full stack microservices app for ticket selling online,
            containerized using Docker-Kubernetes and deployed in GKE with
            multi-stage pipelines for testing and building using Github Actions
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
