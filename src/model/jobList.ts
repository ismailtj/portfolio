export interface IContract {
  id: Number;
  attributes: {
    title: String;
    createdAt: String;
    updatedAt: String;
    publishedAt: String;
  };
}

export interface ITechnoligy {
  id: Number;
  attributes: {
    Name: String;
    createdAt: String;
    updatedAt: String;
    publishedAt: String;
  };
}

export interface IJob {
  id: Number;
  attributes: {
    title: String;
    description: String;
    start: String;
    end: String;
    createdAt: String;
    updatedAt: String;
    publishedAt: String;
    Company: String;
    technologies: {
      data: ITechnoligy[];
    };
    contract: {
      data: IContract;
    };
  };
}

/*
{
  "data": [
      {
          "id": 1,
          "attributes": {
              "title": "Software developer",
              "description": "During my internship, I contributed to the development of a streamlined data flow designed to efficiently transfer information between databases, adhering strictly to best practices in data management. Another significant aspect of the project involved the creation of modules on the Odoo platform, focusing on customization and optimization of functionalities to meet the specific requirements of the client.",
              "start": "2023-03-01",
              "end": "2023-08-01",
              "createdAt": "2024-02-22T00:16:06.346Z",
              "updatedAt": "2024-02-22T00:32:37.939Z",
              "publishedAt": "2024-02-22T11:46:15.998Z",
              "Company": "Carina",
              "technologies": {
                  "data": [
                      {
                          "id": 6,
                          "attributes": {
                              "Name": "Python",
                              "createdAt": "2024-02-21T23:55:37.981Z",
                              "updatedAt": "2024-02-21T23:55:37.981Z",
                              "publishedAt": "2024-02-22T11:46:07.218Z"
                          }
                      },
                  ]
              },
              "contract": {
                  "data": {
                      "id": 3,
                      "attributes": {
                          "title": "training",
                          "createdAt": "2024-02-21T23:39:16.794Z",
                          "updatedAt": "2024-02-21T23:47:46.056Z",
                          "publishedAt": "2024-02-22T11:45:58.199Z"
                      }
                  }
              }
          }
      },
      {
          "id": 2,
          "attributes": {
              "title": "Full Stack Developer",
              "description": "During my tenure at the company, I spearheaded the development of a web application aimed at showcasing the city to assist tourists in gaining insights into its historical monuments, hotels, restaurants, and shopping centers. Additionally, I played a pivotal role in creating a management and dashboard application for a foundation, streamlining its operations. Another notable contribution was the development of an engaging game suitable for both children and adults, challenging them to spot 10 differences between two images. Furthermore, I took charge of crafting responsive landing pages to enhance user experience and engagement.",
              "start": "2021-10-01",
              "end": "2021-06-01",
              "createdAt": "2024-02-22T00:29:13.460Z",
              "updatedAt": "2024-02-22T00:33:01.734Z",
              "publishedAt": "2024-02-22T11:46:15.998Z",
              "Company": "INNOVEOS",
              "technologies": {
                  "data": [
                      {
                          "id": 2,
                          "attributes": {
                              "Name": "NextJS",
                              "createdAt": "2024-02-21T23:52:43.670Z",
                              "updatedAt": "2024-02-21T23:53:01.682Z",
                              "publishedAt": "2024-02-22T11:46:07.218Z"
                          }
                      },
                      {
                          "id": 9,
                          "attributes": {
                              "Name": "JavaScript",
                              "createdAt": "2024-02-21T23:56:19.082Z",
                              "updatedAt": "2024-02-21T23:56:19.082Z",
                              "publishedAt": "2024-02-22T11:46:07.218Z"
                          }
                      },
                      {
                          "id": 1,
                          "attributes": {
                              "Name": "ReactJS",
                              "createdAt": "2024-02-21T23:52:34.948Z",
                              "updatedAt": "2024-02-21T23:52:34.948Z",
                              "publishedAt": "2024-02-22T11:46:07.218Z"
                          }
                      }
                  ]
              },
              "contract": {
                  "data": {
                      "id": 1,
                      "attributes": {
                          "title": "CDI",
                          "createdAt": "2024-02-21T23:36:35.759Z",
                          "updatedAt": "2024-02-21T23:36:35.759Z",
                          "publishedAt": "2024-02-22T11:45:58.199Z"
                      }
                  }
              }
          }
      },
      {
          "id": 3,
          "attributes": {
              "title": "Front-end Developer",
              "description": "During my tenure at the company, I actively contributed to various projects, showcasing my skills in software development. One notable project involved the creation of a SaaS application designed to streamline the clinical relationship between doctors and patients. Another significant achievement was the development of a comprehensive dashboard displaying crucial information related to the client's clinics and pharmacies. Additionally, I played a key role in designing a recruitment module for SOBRUS and crafting responsive landing pages for enhanced user experience. Beyond project initiation, I also dedicated efforts to bug fixing and updating existing solutions, ensuring the continuous improvement and functionality of the developed systems.",
              "start": "2021-04-01",
              "end": "2021-10-01",
              "createdAt": "2024-02-22T00:45:16.021Z",
              "updatedAt": "2024-02-22T00:45:16.021Z",
              "publishedAt": "2024-02-22T11:46:15.998Z",
              "Company": "Sobrus",
              "technologies": {
                  "data": [
                      {
                          "id": 1,
                          "attributes": {
                              "Name": "ReactJS",
                              "createdAt": "2024-02-21T23:52:34.948Z",
                              "updatedAt": "2024-02-21T23:52:34.948Z",
                              "publishedAt": "2024-02-22T11:46:07.218Z"
                          }
                      },
                      {
                          "id": 9,
                          "attributes": {
                              "Name": "JavaScript",
                              "createdAt": "2024-02-21T23:56:19.082Z",
                              "updatedAt": "2024-02-21T23:56:19.082Z",
                              "publishedAt": "2024-02-22T11:46:07.218Z"
                          }
                      },
                      {
                          "id": 7,
                          "attributes": {
                              "Name": "Java",
                              "createdAt": "2024-02-21T23:55:46.877Z",
                              "updatedAt": "2024-02-21T23:55:46.877Z",
                              "publishedAt": "2024-02-22T11:46:07.218Z"
                          }
                      }
                  ]
              },
              "contract": {
                  "data": {
                      "id": 1,
                      "attributes": {
                          "title": "CDI",
                          "createdAt": "2024-02-21T23:36:35.759Z",
                          "updatedAt": "2024-02-21T23:36:35.759Z",
                          "publishedAt": "2024-02-22T11:45:58.199Z"
                      }
                  }
              }
          }
      },
      {
          "id": 4,
          "attributes": {
              "title": "Web developer",
              "description": "During my tenure at the company, I spearheaded the development of a multi-level marketing (MLM) network management application. This involved creating a robust platform that facilitated the efficient handling of various marketing tiers. Additionally, I played a pivotal role in integrating an internal management system, encompassing project management, leave requests, and staff time tracking. This initiative aimed to streamline internal processes, enhance overall efficiency, and provide a comprehensive solution for managing diverse aspects of the company's operations.",
              "start": "2024-09-01",
              "end": "2021-04-01",
              "createdAt": "2024-02-22T00:48:44.593Z",
              "updatedAt": "2024-02-22T00:48:44.593Z",
              "publishedAt": "2024-02-22T11:46:15.998Z",
              "Company": "ICCL",
              "technologies": {
                  "data": [
                      {
                          "id": 4,
                          "attributes": {
                              "Name": "Odoo",
                              "createdAt": "2024-02-21T23:54:44.909Z",
                              "updatedAt": "2024-02-21T23:54:44.909Z",
                              "publishedAt": "2024-02-22T11:46:07.218Z"
                          }
                      },
                      {
                          "id": 8,
                          "attributes": {
                              "Name": "Php",
                              "createdAt": "2024-02-21T23:56:03.181Z",
                              "updatedAt": "2024-02-21T23:56:03.181Z",
                              "publishedAt": "2024-02-22T11:46:07.218Z"
                          }
                      },
                      {
                          "id": 5,
                          "attributes": {
                              "Name": "Wordpress",
                              "createdAt": "2024-02-21T23:54:58.330Z",
                              "updatedAt": "2024-02-21T23:54:58.330Z",
                              "publishedAt": "2024-02-22T11:46:07.218Z"
                          }
                      }
                  ]
              },
              "contract": {
                  "data": {
                      "id": 1,
                      "attributes": {
                          "title": "CDI",
                          "createdAt": "2024-02-21T23:36:35.759Z",
                          "updatedAt": "2024-02-21T23:36:35.759Z",
                          "publishedAt": "2024-02-22T11:45:58.199Z"
                      }
                  }
              }
          }
      },
      {
          "id": 5,
          "attributes": {
              "title": "Web/ERP developer",
              "description": "During my tenure at the company, I actively contributed to the development of a parking management application. My responsibilities included designing and implementing features to streamline parking operations, enhance user experience, and ensure efficient space utilization. Additionally, I played a key role in creating a dynamic dashboard that visually presented diverse statistics for various regions, provinces, and cities on a geographical map. This involved utilizing data visualization techniques to provide comprehensive insights into the performance and trends across different geographical areas.",
              "start": "2019-11-01",
              "end": "2021-09-01",
              "createdAt": "2024-02-22T00:54:22.925Z",
              "updatedAt": "2024-02-22T00:54:22.925Z",
              "publishedAt": "2024-02-22T11:46:15.998Z",
              "Company": "OSISOFTWARE",
              "technologies": {
                  "data": [
                      {
                          "id": 4,
                          "attributes": {
                              "Name": "Odoo",
                              "createdAt": "2024-02-21T23:54:44.909Z",
                              "updatedAt": "2024-02-21T23:54:44.909Z",
                              "publishedAt": "2024-02-22T11:46:07.218Z"
                          }
                      },
                      {
                          "id": 6,
                          "attributes": {
                              "Name": "Python",
                              "createdAt": "2024-02-21T23:55:37.981Z",
                              "updatedAt": "2024-02-21T23:55:37.981Z",
                              "publishedAt": "2024-02-22T11:46:07.218Z"
                          }
                      },
                      {
                          "id": 9,
                          "attributes": {
                              "Name": "JavaScript",
                              "createdAt": "2024-02-21T23:56:19.082Z",
                              "updatedAt": "2024-02-21T23:56:19.082Z",
                              "publishedAt": "2024-02-22T11:46:07.218Z"
                          }
                      },
                      {
                          "id": 1,
                          "attributes": {
                              "Name": "ReactJS",
                              "createdAt": "2024-02-21T23:52:34.948Z",
                              "updatedAt": "2024-02-21T23:52:34.948Z",
                              "publishedAt": "2024-02-22T11:46:07.218Z"
                          }
                      }
                  ]
              },
              "contract": {
                  "data": {
                      "id": 1,
                      "attributes": {
                          "title": "CDI",
                          "createdAt": "2024-02-21T23:36:35.759Z",
                          "updatedAt": "2024-02-21T23:36:35.759Z",
                          "publishedAt": "2024-02-22T11:45:58.199Z"
                      }
                  }
              }
          }
      },
      {
          "id": 6,
          "attributes": {
              "title": "Web/ERP developer",
              "description": "I worked on creating an absence management application for a school during my time at the company. My role involved developing features to facilitate the tracking and administration of student absences.",
              "start": "2019-05-01",
              "end": "2019-11-01",
              "createdAt": "2024-02-22T00:55:56.619Z",
              "updatedAt": "2024-02-22T00:56:51.028Z",
              "publishedAt": "2024-02-22T11:46:15.998Z",
              "Company": "OSISOFTWARE",
              "technologies": {
                  "data": [
                      {
                          "id": 4,
                          "attributes": {
                              "Name": "Odoo",
                              "createdAt": "2024-02-21T23:54:44.909Z",
                              "updatedAt": "2024-02-21T23:54:44.909Z",
                              "publishedAt": "2024-02-22T11:46:07.218Z"
                          }
                      },
                      {
                          "id": 6,
                          "attributes": {
                              "Name": "Python",
                              "createdAt": "2024-02-21T23:55:37.981Z",
                              "updatedAt": "2024-02-21T23:55:37.981Z",
                              "publishedAt": "2024-02-22T11:46:07.218Z"
                          }
                      }
                  ]
              },
              "contract": {
                  "data": {
                      "id": 3,
                      "attributes": {
                          "title": "training",
                          "createdAt": "2024-02-21T23:39:16.794Z",
                          "updatedAt": "2024-02-21T23:47:46.056Z",
                          "publishedAt": "2024-02-22T11:45:58.199Z"
                      }
                  }
              }
          }
      }
  ],
  "meta": {
      "pagination": {
          "page": 1,
          "pageSize": 25,
          "pageCount": 1,
          "total": 6
      }
  }
}*/
