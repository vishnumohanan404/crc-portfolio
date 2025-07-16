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
              target="_blank"
            >
              Github
            </a>
            <div className="border-l h-4 mx-2"></div>
            <a
              className="text-xs font-light text-blue-500"
              href="https://vishnuvw.xyz/"
              target="_blank"
            >
              Live
            </a>
          </div>
        </div>
        <div className="flex justify-between flex-col gap-1">
          <p className="font-semibold text-muted-foreground">
            GitOps ArgoCD deployment on self hosted K8s with HPA in Hetzner VPS
          </p>
          <p className="font-extralight text-sm leading-relaxed">
            A three tier NodeJS application deployed in production grade
            multi-node <span className="font-medium"> kubeadm</span> cluster
            with <span className="font-medium"> HPA</span>.
            <br />
            <span className="font-medium">Tools used:</span> Kubeadm, ArgoCD,
            Helm, ECR, Traefik-Ingress, Cert-Manager, Prometheus & Grafana.
          </p>
          <div className="flex">
            <a
              className="text-xs font-light text-blue-500"
              href="https://gitlab.com/forminit/forminit-manifests"
              target="_blank"
            >
              GitLab
            </a>
            <div className="border-l h-4 mx-2"></div>
            <a
              className="text-xs font-light text-blue-500"
              href="https://forminit.bakedbash.xyz/"
              target="_blank"
            >
              Live
            </a>
          </div>
        </div>
        <div className="flex justify-between flex-col gap-1">
          <p className="font-semibold text-muted-foreground">
            Gitlab CI Pipeline with self hosted runner
          </p>
          <p className="font-extralight text-sm leading-relaxed">
            A complete GitOps friendly CI pipeline with enterprise ready
            <span className="font-medium"> DevSecOps</span> pipeline with
            SonarQube, Trivy filesystem and image scans, OWASP dependency
            checks.
            <br />
            <span className="font-medium">Tools used:</span> GitLab CI,
            SonarQube, Trivy FS Scan, Trivy Image Scan, OWASP Dependency Check,
            GitLab Runner, ECR.
          </p>
          <div className="flex">
            <a
              className="text-xs font-light text-blue-500"
              href="https://gitlab.com/forminit/forminit-app"
              target="_blank"
            >
              GitLab
            </a>
          </div>
        </div>
        <div className="flex justify-between flex-col gap-1">
          <p className="font-semibold text-muted-foreground">
            24×7 Self-Hosted Homelab for Personal DevOps Stack
          </p>
          <p className="font-extralight text-sm leading-relaxed">
            Mix of VMs and LXCs running Jenkins, SonarQube, GitLab Runners and
            more
            <br />
            <span className="font-medium">Tools used:</span> Proxmox, Docker,
            LXC, Portainer, Prometheus & Grafana.
          </p>
          <div className="flex">
            <a
              className="text-xs font-light text-blue-500"
              href="https://gitlab.com/forminit/forminit-app"
              target="_blank"
            >
              GitLab
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
            target="_blank"
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
            subnet with ALB, Route53, S3 and AWS Cert Manager all provisioned
            using <span className="font-medium">Terraform</span> <br />{" "}
            <span className="font-medium">Tools used:</span> Terraform, Jenkins,
            ALB, Route 53, AWS Certificate Manager, S3.
          </p>
          <div className="flex">
            <a
              className="text-xs font-light text-blue-500 "
              href="https://github.com/vishnumohanan404/flask-rest-app"
              target="_blank"
            >
              Github
            </a>
            <div className="border-l h-4 mx-2"></div>
            <a
              className="text-xs font-light text-blue-500 "
              href="https://github.com/vishnumohanan404/flask-rest-app-infra"
              target="_blank"
            >
              Infra
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
            target="_blank"
          >
            Github
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
