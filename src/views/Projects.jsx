import React from "react";
// import { motion } from "framer-motion";
import Card from "../components/Card"; // Assuming the Card component is separate
import backgroundImg from "../assets/abstract.jpg";
import eks from "../assets/eks.png";
import terra from "../assets/terraform.jpg";
import jens from "../assets/jen_kins.png";
import gitops from "../assets/GitOps.png";
import qt from "../assets/qt.jpg";
import instant from "../assets/instant.jpg";
import docker_ from "../assets/Untitled.png";

const Projects = () => {
  const projects = [
    {
      title: "Spring PetClinic Cloud",
      description: "The initiative aims to establish a CI/CD pipeline utilizing Terraform, GitHub, Jenkins, and ArgoCD for deploying our application on a Kubernetes cluster hosted in AWS EKS.",
      githubUrl: "https://github.com/sshsurabhi/spring-petclinic-cloud.git",
      image: eks,
    },
    {
      title: "IAC, Deploy project in AWS",
      description: "The demonstration of complete lifecycle of cloud infrastructure management using Terraform on Amazon Web Services (AWS). Encompasses the creation, building, and deployment processes.",
      githubUrl: "https://github.com/sshsurabhi/Terraform-AWS-Project.git",
      image: terra
    },
    {
      title: "APITesting-Docker-FastAPI",
      description: "A project designed to implement continuous integration and continuous deployment pipelines for testing FastAPI applications.",
      githubUrl: "https://github.com/sshsurabhi/Docker-Pipeline-Test-FastAPI.git",
      image: docker_
    },
    {
      title: "CI/CD-Jenkins-Kubernetes",
      description: "This project illustrates the deployment of a project using kubernetes. Jenkins has been used to created, and deploying the project automatically.",
      githubUrl: "https://github.com/sshsurabhi/jenkins-k8s-conclusion.git",
      image: jens
    },
    {
      title: "Gitlab-Gitops CI-CD",
      description: "Illustration of implementing kubernetes manifests using gitlab pipeline. Implementation automates the building, and deploying the docker images, and manifests.",
      githubUrl: "https://gitlab.com/SaiSriHarsha/gitlab-devops.git",
      image: gitops
    },

    {
      title: "Pyqt GUI Application",
      description: "This project is a versatile desktop application designed for cross-functional use, integrating serial communication, TCP, and Ethernet protocols. It effectively interacts with essential external applications, providing a seamless testing environment for users. Additionally, the application features a comprehensive 3D printer library and supports IDS industrial camera, enhancing its utility in various technical contexts.",
      githubUrl: "https://github.com/sshsurabhi/Python-QT-GUI.git",
      image: qt,
    },
    {
      title: "Instance Segmentation",
      description: "This project demonstrates an innovative approach to Instance Segmentation utilizing Python 3, PyTorch, and Keras. The objective is to accurately segment individual objects within an image, covering various classes. The implementation comprises components such as Object Detection with YOLOV3, Human Pose Estimation. These components form an effective framework for Instance Segmentation, allowing for enhanced object recognition and pose analysis in images.",
      githubUrl: "https://github.com/sshsurabhi/Instance-Segmentation-for-Humans.git",
      image: instant
    },
    // Add more projects here
  ];

  return (
    <div
      id='projects'
      className="flex flex-col items-center px-4 lg:px-12 py-16 min-h-[600px]" // Increased padding and set minimum height
      style={{
        backgroundImage: `url(${backgroundImg})`, // Set the background image
        backgroundSize: "cover", // Make the image cover the whole container
        backgroundPosition: "center", // Center the background image
        backgroundRepeat: "no-repeat", // Prevent tiling
        backgroundAttachment: "fixed", // Make it a parallax background (optional)
      }}
    >
      <h3
        className="mt-16 text-3xl font-semibold opacity-0 transform scale-90 animate-fadeInUp"
        style={{
          color: "#FF6F00",
          fontFamily: "'Montserrat', sans-serif",
        }}
      >
        Turning ideas in to reality !
      </h3>

      <style jsx>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeInUp {
            animation: fadeInUp 1s ease-out forwards;
          }
        `}
      </style>

      {/* Projects List */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <Card key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;