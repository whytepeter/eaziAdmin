const roles = [
  {
      "_id": "63c04df795b342001c477aa0",
      "privileges": [
          {
              "_id": "63bbe18bca5b65001c8c3041",
              "title": "View_Payroll",
              "groupName": "Payroll"
          },
          {
              "_id": "63bbe18bca5b65001c8c3042",
              "title": "Edit_Payroll",
              "groupName": "Payroll"
          },
          {
              "_id": "63bbe18bca5b65001c8c304b",
              "title": "Payroll_Preparation",
              "groupName": "Payroll"
          }
      ],
      "title": "auditor",
      "companyId": "6355a2d93971c7001cb6db09",
      "createdAt": "2023-01-12T18:14:15.455Z",
      "updatedAt": "2023-01-12T18:14:15.455Z",
      "__v": 0,
      "employees": []
  },
  {
      "_id": "63c04df795b342001c477aa2",
      "privileges": [
          {
              "_id": "63bbe18bca5b65001c8c3040",
              "title": "ALL",
              "groupName": "Admin"
          }
      ],
      "title": "admin",
      "companyId": "6355a2d93971c7001cb6db09",
      "createdAt": "2023-01-12T18:14:15.586Z",
      "updatedAt": "2023-01-12T18:14:15.586Z",
      "__v": 0,
      "employees": [
          {
              "_id": "637161bd69e08f001c41a83c",
              "profile": {
                  "firstName": "Jake",
                  "lastName": "Drey",
                  "middleName": "",
                  "title": "MR",
                  "phone": "",
                  "otherPhoneNumbers": [],
                  "countryCode": "+234",
                  "address": "",
                  "country": "",
                  "dob": "",
                  "state": "",
                  "gender": "OTHER",
                  "nin": "",
                  "taxId": "",
                  "status": "ACTIVE",
                  "religion": "",
                  "personalEmail": "",
                  "email": "lerapestova@mitakian.com"
              },
              "job": {
                  "jobTitle": "Cashier",
                  "branchId": "63c9baffd9fe4e001cd9e530",
                  "departmentId": "6412310b75b5d6001c8a9a28",
                  "teamId": "",
                  "employmentType": "CONTRACT",
                  "reportTo": "",
                  "hireDateString": "",
                  "staffLevelId": "637161bc69e08f001c41a82b",
                  "roles": [
                      "63c04df795b342001c477aa2",
                      "645186760e6a3e001c24ecd2"
                  ],
                  "userName": "Whyt-0009"
              },
              "payment": {
                  "bankName": "Access Bank",
                  "accountName": "emmanuel whyte peter",
                  "accountNumber": "0805915974",
                  "accountResolved": true,
                  "bankCode": "044",
                  "recipientCode": "",
                  "bankAccountType": "Not_Sure"
              },
              "health": {
                  "bloodGroup": "",
                  "genotype": "",
                  "disabilities": "",
                  "healthHistory": ""
              },
              "family": {
                  "nextOfKin": {
                      "name": "",
                      "relationship": "",
                      "address": "",
                      "phoneNumbers": [],
                      "email": "",
                      "dob": ""
                  }
              },
              "education": {
                  "history": [
                      {
                          "institutionName": "Niger Delta University",
                          "degree": "BSc",
                          "courseOfStudy": "Computer Science",
                          "grade": "First Class Upper",
                          "graduationYear": "2022",
                          "description": "Last Last School Na Scam",
                          "imageLink": "http://eazipay.storage.googleapis.com/upload_employee_profile_docs/6f3e3fd2-bfdf-49fa-93a8-38b5e4ee8603.jpg",
                          "_id": "6380f044822d60001c2ed11d"
                      },
                      {
                          "institutionName": "University Of Port Harcourt",
                          "degree": "PHD",
                          "courseOfStudy": "Business Administration",
                          "grade": "First Class Upper",
                          "graduationYear": "2022",
                          "description": "",
                          "imageLink": "http://eazipay.storage.googleapis.com/upload_employee_profile_docs/50c96ff5-aff8-4c73-be91-e8027e75ed52.jpg",
                          "_id": "6380f044822d60001c2ed11e"
                      }
                  ],
                  "certificates": [
                      {
                          "title": "BSC",
                          "awardingInstitution": "Niger Delta University",
                          "dateObtained": "2022-11-25",
                          "expiryDate": "2022-11-25",
                          "imageLink": "http://eazipay.storage.googleapis.com/upload_employee_profile_docs/e62b2384-d33d-44d6-8008-e84600c81598.jpg",
                          "_id": "6380ee51b11bea001cb038aa"
                      },
                      {
                          "title": "PHD",
                          "awardingInstitution": "University Of Port Harcourt",
                          "dateObtained": "2022-11-04",
                          "expiryDate": "2022-11-05",
                          "imageLink": "http://eazipay.storage.googleapis.com/upload_employee_profile_docs/ef60e146-0323-457d-93e3-3a4755d7ead2.jpg",
                          "_id": "6380ef03b11bea001cb038ad"
                      }
                  ],
                  "awards": [
                      {
                          "awardReceived": "Best Staying At Home",
                          "awardingOrganisation": "HMOW",
                          "dateObtained": "2022-11-20",
                          "imageLink": "http://eazipay.storage.googleapis.com/upload_employee_profile_docs/9ae5ce19-f740-4e69-a54d-db97f31fd83d.jpg",
                          "_id": "6380ef9f68df0b001c21b48e"
                      }
                  ]
              },
              "activeAccount": false,
              "archived": false,
              "companyId": "6355a2d93971c7001cb6db09",
              "emergency": [],
              "jobHistory": [],
              "companyAsset": [
                  {
                      "assetName": "Mac Book Air",
                      "description": "Another laptop from Grofts",
                      "serialNumber": "3243141231",
                      "tagNumber": "YIH-3",
                      "dateReceived": "2022-11-20",
                      "imageLink": "http://eazipay.storage.googleapis.com/upload_employee_profile_docs/af50e0fb-10a1-40b8-9b33-0223d85d5090.jpg",
                      "_id": "6380e5eb68df0b001c21b477"
                  },
                  {
                      "assetName": "Mac Book Pro",
                      "description": "From Grofts Store",
                      "serialNumber": "324320290",
                      "tagNumber": "YIH-2",
                      "dateReceived": "2022-11-15",
                      "imageLink": "http://eazipay.storage.googleapis.com/upload_employee_profile_docs/19aed162-0904-4263-af5b-9c3c69ac3dc5.jpg",
                      "_id": "6380e6d0b11bea001cb038a6"
                  }
              ],
              "createdAt": "2022-11-13T21:29:33.153Z",
              "updatedAt": "2023-05-02T21:54:02.101Z",
              "__v": 0
          }
      ]
  },
  {
      "_id": "645186760e6a3e001c24ecd2",
      "privileges": [
          {
              "_id": "63bbe18bca5b65001c8c303f",
              "title": "Add_Payroll",
              "groupName": "Payroll"
          },
          {
              "_id": "63bbe18bca5b65001c8c3041",
              "title": "View_Payroll",
              "groupName": "Payroll"
          },
          {
              "_id": "63bbe18bca5b65001c8c3042",
              "title": "Edit_Payroll",
              "groupName": "Payroll"
          },
          {
              "_id": "63bbe18bca5b65001c8c3043",
              "title": "Manage_Bonus",
              "groupName": "Payroll"
          },
          {
              "_id": "63bbe18bca5b65001c8c3044",
              "title": "Manage_Deductions",
              "groupName": "Payroll"
          },
          {
              "_id": "63bbe18bca5b65001c8c3045",
              "title": "Run_Payroll",
              "groupName": "Payroll"
          },
          {
              "_id": "63bbe18bca5b65001c8c3046",
              "title": "Manage_Payslips",
              "groupName": "Payroll"
          },
          {
              "_id": "63bbe18bca5b65001c8c3047",
              "title": "Add_Employee",
              "groupName": "Employee_Management"
          },
          {
              "_id": "63bbe18bca5b65001c8c3048",
              "title": "Edit_Employee",
              "groupName": "Employee_Management"
          },
          {
              "_id": "63bbe18bca5b65001c8c3049",
              "title": "Archive_Employee",
              "groupName": "Employee_Management"
          },
          {
              "_id": "63bbe18bca5b65001c8c304a",
              "title": "View_Employee",
              "groupName": "Employee_Management"
          },
          {
              "_id": "63bbe18bca5b65001c8c304b",
              "title": "Payroll_Preparation",
              "groupName": "Payroll"
          },
          {
              "_id": "63e4046b1986bf001d8a5887",
              "title": "Loan_Application",
              "groupName": "Quick_Loans"
          },
          {
              "_id": "63e4046b1986bf001d8a5888",
              "title": "Loan_Payback",
              "groupName": "Quick_Loans"
          }
      ],
      "title": "assistant",
      "description": "This is the assistant role",
      "companyId": "6355a2d93971c7001cb6db09",
      "creatorId": "63b8466cbbb150001c11edf3",
      "createdAt": "2023-05-02T21:53:58.920Z",
      "updatedAt": "2023-05-02T21:53:58.920Z",
      "__v": 0,
      "employees": [
          {
              "_id": "637161bd69e08f001c41a83c",
              "profile": {
                  "firstName": "Jake",
                  "lastName": "Drey",
                  "middleName": "",
                  "title": "MR",
                  "phone": "",
                  "otherPhoneNumbers": [],
                  "countryCode": "+234",
                  "address": "",
                  "country": "",
                  "dob": "",
                  "state": "",
                  "gender": "OTHER",
                  "nin": "",
                  "taxId": "",
                  "status": "ACTIVE",
                  "religion": "",
                  "personalEmail": "",
                  "email": "lerapestova@mitakian.com"
              },
              "job": {
                  "jobTitle": "Cashier",
                  "branchId": "63c9baffd9fe4e001cd9e530",
                  "departmentId": "6412310b75b5d6001c8a9a28",
                  "teamId": "",
                  "employmentType": "CONTRACT",
                  "reportTo": "",
                  "hireDateString": "",
                  "staffLevelId": "637161bc69e08f001c41a82b",
                  "roles": [
                      "63c04df795b342001c477aa2",
                      "645186760e6a3e001c24ecd2"
                  ],
                  "userName": "Whyt-0009"
              },
              "payment": {
                  "bankName": "Access Bank",
                  "accountName": "emmanuel whyte peter",
                  "accountNumber": "0805915974",
                  "accountResolved": true,
                  "bankCode": "044",
                  "recipientCode": "",
                  "bankAccountType": "Not_Sure"
              },
              "health": {
                  "bloodGroup": "",
                  "genotype": "",
                  "disabilities": "",
                  "healthHistory": ""
              },
              "family": {
                  "nextOfKin": {
                      "name": "",
                      "relationship": "",
                      "address": "",
                      "phoneNumbers": [],
                      "email": "",
                      "dob": ""
                  }
              },
              "education": {
                  "history": [
                      {
                          "institutionName": "Niger Delta University",
                          "degree": "BSc",
                          "courseOfStudy": "Computer Science",
                          "grade": "First Class Upper",
                          "graduationYear": "2022",
                          "description": "Last Last School Na Scam",
                          "imageLink": "http://eazipay.storage.googleapis.com/upload_employee_profile_docs/6f3e3fd2-bfdf-49fa-93a8-38b5e4ee8603.jpg",
                          "_id": "6380f044822d60001c2ed11d"
                      },
                      {
                          "institutionName": "University Of Port Harcourt",
                          "degree": "PHD",
                          "courseOfStudy": "Business Administration",
                          "grade": "First Class Upper",
                          "graduationYear": "2022",
                          "description": "",
                          "imageLink": "http://eazipay.storage.googleapis.com/upload_employee_profile_docs/50c96ff5-aff8-4c73-be91-e8027e75ed52.jpg",
                          "_id": "6380f044822d60001c2ed11e"
                      }
                  ],
                  "certificates": [
                      {
                          "title": "BSC",
                          "awardingInstitution": "Niger Delta University",
                          "dateObtained": "2022-11-25",
                          "expiryDate": "2022-11-25",
                          "imageLink": "http://eazipay.storage.googleapis.com/upload_employee_profile_docs/e62b2384-d33d-44d6-8008-e84600c81598.jpg",
                          "_id": "6380ee51b11bea001cb038aa"
                      },
                      {
                          "title": "PHD",
                          "awardingInstitution": "University Of Port Harcourt",
                          "dateObtained": "2022-11-04",
                          "expiryDate": "2022-11-05",
                          "imageLink": "http://eazipay.storage.googleapis.com/upload_employee_profile_docs/ef60e146-0323-457d-93e3-3a4755d7ead2.jpg",
                          "_id": "6380ef03b11bea001cb038ad"
                      }
                  ],
                  "awards": [
                      {
                          "awardReceived": "Best Staying At Home",
                          "awardingOrganisation": "HMOW",
                          "dateObtained": "2022-11-20",
                          "imageLink": "http://eazipay.storage.googleapis.com/upload_employee_profile_docs/9ae5ce19-f740-4e69-a54d-db97f31fd83d.jpg",
                          "_id": "6380ef9f68df0b001c21b48e"
                      }
                  ]
              },
              "activeAccount": false,
              "archived": false,
              "companyId": "6355a2d93971c7001cb6db09",
              "emergency": [],
              "jobHistory": [],
              "companyAsset": [
                  {
                      "assetName": "Mac Book Air",
                      "description": "Another laptop from Grofts",
                      "serialNumber": "3243141231",
                      "tagNumber": "YIH-3",
                      "dateReceived": "2022-11-20",
                      "imageLink": "http://eazipay.storage.googleapis.com/upload_employee_profile_docs/af50e0fb-10a1-40b8-9b33-0223d85d5090.jpg",
                      "_id": "6380e5eb68df0b001c21b477"
                  },
                  {
                      "assetName": "Mac Book Pro",
                      "description": "From Grofts Store",
                      "serialNumber": "324320290",
                      "tagNumber": "YIH-2",
                      "dateReceived": "2022-11-15",
                      "imageLink": "http://eazipay.storage.googleapis.com/upload_employee_profile_docs/19aed162-0904-4263-af5b-9c3c69ac3dc5.jpg",
                      "_id": "6380e6d0b11bea001cb038a6"
                  }
              ],
              "createdAt": "2022-11-13T21:29:33.153Z",
              "updatedAt": "2023-05-02T21:54:02.101Z",
              "__v": 0
          },
          {
              "_id": "6371632e69e08f001c41a858",
              "profile": {
                  "firstName": "Jane",
                  "lastName": "Munla",
                  "middleName": "",
                  "otherPhoneNumbers": [],
                  "email": "swills1313@mymailcr.com",
                  "phone": "2348103139758",
                  "address": "",
                  "country": "",
                  "dob": "",
                  "state": "",
                  "title": "MRS",
                  "gender": "FEMALE",
                  "relationshipStatus": null,
                  "religion": "",
                  "personalEmail": "",
                  "pfp": "",
                  "nin": "",
                  "taxId": ""
              },
              "job": {
                  "jobTitle": "Product Designer",
                  "branchId": "63c9baffd9fe4e001cd9e530",
                  "departmentId": "64122b6153b0a7001ccebaa4",
                  "teamId": "",
                  "employmentType": "NYSC",
                  "reportTo": "",
                  "hireDateString": "",
                  "staffLevelId": "6371632e69e08f001c41a850",
                  "roles": [
                      "645186760e6a3e001c24ecd2"
                  ],
                  "userName": "Whyt-0008"
              },
              "payment": {
                  "bankName": "Access Bank",
                  "accountName": "olumide tajudeen jimoh",
                  "accountNumber": "1111111111",
                  "accountResolved": true,
                  "bankCode": "044",
                  "recipientCode": "RCP_beqi2qrmn3t8iu1",
                  "bankAccountType": "Not_Sure"
              },
              "health": {
                  "bloodGroup": "",
                  "genotype": "",
                  "disabilities": "",
                  "healthHistory": ""
              },
              "family": {
                  "nextOfKin": {
                      "name": "",
                      "relationship": "",
                      "address": "",
                      "phoneNumbers": [],
                      "email": "",
                      "dob": ""
                  }
              },
              "education": {
                  "history": [],
                  "certificates": [],
                  "awards": []
              },
              "activeAccount": false,
              "archived": false,
              "companyId": "6355a2d93971c7001cb6db09",
              "emergency": [],
              "jobHistory": [],
              "companyAsset": [],
              "createdAt": "2022-11-13T21:35:42.712Z",
              "updatedAt": "2023-05-02T21:54:02.101Z",
              "__v": 0
          },
          {
              "_id": "6371e18ccbc0d5001c27ca29",
              "profile": {
                  "firstName": "Glory",
                  "lastName": "Johnson",
                  "middleName": "",
                  "otherPhoneNumbers": [],
                  "email": "alfnet2@lompikachi.com",
                  "phone": "2348108139752",
                  "address": "",
                  "country": "",
                  "dob": "",
                  "state": "",
                  "title": "Miss",
                  "gender": "FEMALE",
                  "relationshipStatus": null,
                  "religion": "",
                  "personalEmail": "",
                  "pfp": "http://eazipay.storage.googleapis.com/17c632c8-f81b-4016-8a88-3dd5a3a3bac0-avatar-5.png",
                  "nin": "",
                  "taxId": ""
              },
              "job": {
                  "jobTitle": "Relationship Manager",
                  "branchId": "63bd3650395a3c001c97b269",
                  "departmentId": "6412310b75b5d6001c8a9a28",
                  "teamId": "",
                  "userName": "Whyt-00010",
                  "employmentType": "VOLUNTEER",
                  "reportTo": "6371e18ccbc0d5001c27ca29",
                  "hireDateString": "2023-01-19",
                  "staffLevelId": "6371e18bcbc0d5001c27ca16",
                  "roles": [
                      "645186760e6a3e001c24ecd2"
                  ]
              },
              "payment": {
                  "bankName": "Access Bank",
                  "accountName": "",
                  "accountNumber": "0805915974",
                  "accountResolved": true,
                  "bankCode": "044",
                  "recipientCode": "",
                  "bankAccountType": "Not_Sure"
              },
              "health": {
                  "bloodGroup": "",
                  "genotype": "",
                  "disabilities": "",
                  "healthHistory": ""
              },
              "family": {
                  "nextOfKin": {
                      "name": "",
                      "relationship": "",
                      "address": "",
                      "phoneNumbers": [],
                      "email": "",
                      "dob": ""
                  }
              },
              "education": {
                  "history": [],
                  "certificates": [],
                  "awards": []
              },
              "activeAccount": false,
              "archived": false,
              "companyId": "6355a2d93971c7001cb6db09",
              "emergency": [
                  {
                      "fullName": "Edisemi",
                      "relationship": "Girl Friend",
                      "address": "Yenagoa, Bayelsa State",
                      "phone": [
                          "+2349059769092"
                      ],
                      "email": "edisemiefegi@gmail.com",
                      "_id": "63c990b90f2172001c3dc42f"
                  },
                  {
                      "fullName": "Peace Peter",
                      "relationship": "Sister",
                      "address": "Yenagoa, Bayelsa State",
                      "phone": [
                          "+234 810 427 2104"
                      ],
                      "email": "peacepeter@gmail.com",
                      "_id": "63c99104235bdd001c5b0214"
                  }
              ],
              "jobHistory": [],
              "companyAsset": [
                  {
                      "assetName": "Mac Book",
                      "description": "fada",
                      "serialNumber": "fada",
                      "tagNumber": "fadfa",
                      "dateReceived": "2022-12-01",
                      "imageLink": "http://eazipay.storage.googleapis.com/upload_employee_profile_docs/f9352d3f-046d-48f9-b95b-73a7563bc940.jpg",
                      "_id": "63886ad8530036001c8a3af8"
                  }
              ],
              "createdAt": "2022-11-14T06:34:52.003Z",
              "updatedAt": "2023-05-02T21:54:02.101Z",
              "__v": 0
          },
          {
              "_id": "63725ab94783bb001c4febc1",
              "profile": {
                  "firstName": "Grace",
                  "lastName": "Jill",
                  "middleName": "",
                  "otherPhoneNumbers": [],
                  "email": "rabayless@onlyu.link",
                  "phone": "",
                  "address": "",
                  "country": "",
                  "dob": "",
                  "state": "",
                  "title": "MR",
                  "gender": "FEMALE",
                  "relationshipStatus": null,
                  "religion": "",
                  "personalEmail": "",
                  "pfp": "",
                  "nin": "",
                  "taxId": ""
              },
              "job": {
                  "jobTitle": "Product Designer",
                  "branchId": "63bd3650395a3c001c97b269",
                  "departmentId": "6412310b75b5d6001c8a9a28",
                  "teamId": "",
                  "employmentType": "FULLTIME",
                  "reportTo": "",
                  "hireDateString": "",
                  "staffLevelId": "63725ab94783bb001c4febb9",
                  "roles": [
                      "645186760e6a3e001c24ecd2"
                  ],
                  "userName": "Whyt-00011"
              },
              "payment": {
                  "bankName": "Zenith Bank",
                  "accountName": "emmanuel whyte peter",
                  "accountNumber": "2121340638",
                  "accountResolved": true,
                  "bankCode": "057",
                  "recipientCode": "RCP_djss4ik7obyz3b1",
                  "bankAccountType": "Not_Sure"
              },
              "health": {
                  "bloodGroup": "",
                  "genotype": "",
                  "disabilities": "",
                  "healthHistory": ""
              },
              "family": {
                  "nextOfKin": {
                      "name": "",
                      "relationship": "",
                      "address": "",
                      "phoneNumbers": [],
                      "email": "",
                      "dob": ""
                  }
              },
              "education": {
                  "history": [],
                  "certificates": [],
                  "awards": []
              },
              "activeAccount": false,
              "archived": false,
              "companyId": "6355a2d93971c7001cb6db09",
              "emergency": [],
              "jobHistory": [],
              "companyAsset": [],
              "createdAt": "2022-11-14T15:11:53.448Z",
              "updatedAt": "2023-05-02T21:54:02.101Z",
              "__v": 0
          }
      ]
  }
]

  export default roles