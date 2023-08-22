const employees = [
    {
        "_id": "6371e18ccbc0d5001c27ca29",
        "companyId": "6355a2d93971c7001cb6db09",
        "company": null,
        "profile": {
            "status": null,
            "password": null,
            "accountType": null,
            "firstName": "Glory",
            "lastName": "Johnson",
            "middleName": "",
            "email": "alfnet2@lompikachi.com",
            "phone": "2348108139752",
            "address": "",
            "country": "",
            "dob": "",
            "pfp": "http://eazipay.storage.googleapis.com/17c632c8-f81b-4016-8a88-3dd5a3a3bac0-avatar-5.png",
            "state": "",
            "gender": "FEMALE",
            "title": "Miss",
            "otherPhoneNumbers": [],
            "relationshipStatus": null,
            "picture": null,
            "ISO2": null,
            "birthday": null,
            "religion": "",
            "personalEmail": "",
            "nin": "",
            "taxId": "",
            "__typename": "EmployeeProfile"
        },
        "job": {
            "departmentId": "6412310b75b5d6001c8a9a28",
            "staffLevelId": "6371e18bcbc0d5001c27ca16",
            "jobTitle": "Relationship Manager",
            "teamId": "",
            "userName": "Whyt-00010",
            "branchId": "63bd3650395a3c001c97b269",
            "employmentType": "VOLUNTEER",
            "reportTo": "6371e18ccbc0d5001c27ca29",
            "hireDateString": "2023-01-19",
            "__typename": "EmployeeJob"
        },
        "emergency": [
            {
                "_id": "63c990b90f2172001c3dc42f",
                "fullName": "Edisemi",
                "relationship": "Girl Friend",
                "address": "Yenagoa, Bayelsa State",
                "phone": [
                    "+2349059769092"
                ],
                "email": "edisemiefegi@gmail.com",
                "__typename": "EmergencyContact"
            },
            {
                "_id": "63c99104235bdd001c5b0214",
                "fullName": "Peace Peter",
                "relationship": "Sister",
                "address": "Yenagoa, Bayelsa State",
                "phone": [
                    "+234 810 427 2104"
                ],
                "email": "peacepeter@gmail.com",
                "__typename": "EmergencyContact"
            }
        ],
        "payment": {
            "bankName": "Access Bank",
            "accountName": "",
            "accountNumber": "0805915974",
            "accountResolved": true,
            "bankCode": "044",
            "monthlySalary": null,
            "recipientCode": "",
            "bankAccountType": "Not_Sure",
            "__typename": "EmployeePaymentDetails"
        },
        "lastLogin": null,
        "staffLevel": {
            "_id": "6371e18bcbc0d5001c27ca16",
            "creatorId": "6355a2d93971c7001cb6db09",
            "companyId": "6355a2d93971c7001cb6db09",
            "title": "emmanuel whyte peter #425dab157a3f1a9f",
            "usePercentageForAllowance": true,
            "grossAmount": 50000,
            "netAmount": 44096,
            "allowanceDetails": [
                {
                    "_id": "6371e18bcbc0d5001c27ca17",
                    "allowanceId": "6355a2d93971c7001cb6db0b",
                    "percentage": 20,
                    "amount": 10000,
                    "__typename": "AllowanceDetails"
                },
                {
                    "_id": "6371e18bcbc0d5001c27ca18",
                    "allowanceId": "6355a2d93971c7001cb6db0c",
                    "percentage": 30,
                    "amount": 15000,
                    "__typename": "AllowanceDetails"
                },
                {
                    "_id": "6371e18bcbc0d5001c27ca19",
                    "allowanceId": "6355a2d93971c7001cb6db0d",
                    "percentage": 20,
                    "amount": 10000,
                    "__typename": "AllowanceDetails"
                },
                {
                    "_id": "6371e18bcbc0d5001c27ca1a",
                    "allowanceId": "6355a342d11e0f001cc78d25",
                    "percentage": 30,
                    "amount": 15000,
                    "__typename": "AllowanceDetails"
                }
            ],
            "additionalAllowanceDetails": [],
            "nhf": {
                "amount": null,
                "__typename": "nhfType"
            },
            "pension": {
                "amount": null,
                "provider": null,
                "providerPin": null,
                "employerPensionContribution": null,
                "usePercentage": null,
                "employeePensionPin": null,
                "__typename": "pensionType"
            },
            "itf": {
                "amount": null,
                "__typename": "itfType"
            },
            "nsitf": {
                "amount": null,
                "__typename": "nsitfType"
            },
            "paye": {
                "amount": 1695.8666666667,
                "stateForPaye": "",
                "taxId": "",
                "__typename": "payeType"
            },
            "wht": null,
            "lifeInsurance": {
                "provider": null,
                "amount": null,
                "duration": null,
                "__typename": "lifeInsuranceType"
            },
            "lifeAssurance": {
                "provider": null,
                "amount": null,
                "duration": null,
                "__typename": "lifeAssuranceType"
            },
            "hmo": {
                "provider": "",
                "amount": 0,
                "duration": "MONTHLY",
                "plan": "GOLD",
                "__typename": "hmoType"
            },
            "gratuity": {
                "salaryAmount": null,
                "yearsWorked": null,
                "amount": null,
                "__typename": "gratuityType"
            },
            "benefits": [
                "HMO",
                "PAYE"
            ],
            "businessExpense": {
                "amount": null,
                "expenseName": null,
                "__typename": "businessExpenseType"
            },
            "withholdingTax": false,
            "manually_inputted": false,
            "createdAt": "2022-11-14T06:34:51.946Z",
            "updatedAt": "2023-03-06T17:43:37.797Z",
            "__typename": "StaffLevel"
        },
        "branch": {
            "_id": "63bd3650395a3c001c97b269",
            "creatorId": "63b8466cbbb150001c11edf3",
            "companyId": "6355a2d93971c7001cb6db09",
            "name": "okpoma",
            "address": "Nigeria",
            "createdAt": "2023-01-10T09:56:32.474Z",
            "updatedAt": "2023-02-09T22:05:19.477Z",
            "__typename": "Branch"
        },
        "department": {
            "_id": "6412310b75b5d6001c8a9a28",
            "name": "testers 101",
            "creatorId": "63b8466cbbb150001c11edf3",
            "companyId": "6355a2d93971c7001cb6db09",
            "departmentHead": null,
            "createdAt": "2023-03-15T20:56:43.993Z",
            "updatedAt": "2023-03-15T20:56:43.993Z",
            "__typename": "DepartmentV3"
        },
        "userDocuments": [
            {
                "_id": "6392fd9438c07a001c0151e9",
                "companyId": "6355a2d93971c7001cb6db09",
                "employeeId": "6371e18ccbc0d5001c27ca29",
                "documentTitle": "PDF",
                "documentUrl": "http://eazipay.storage.googleapis.com/upload_employee_profile_docs/690549a0-ea59-4987-ae0c-d53950be7b6c.jpg",
                "createdAt": "1670577556891",
                "updatedAt": "1670577556891",
                "__typename": "UserDocument"
            },
            {
                "_id": "63a5a6e6d37cd5001c90e621",
                "companyId": "6355a2d93971c7001cb6db09",
                "employeeId": "6371e18ccbc0d5001c27ca29",
                "documentTitle": "Doc",
                "documentUrl": "http://eazipay.storage.googleapis.com/05c88e03-ef26-47e6-ac35-1b05b9c8a156-Jane-November-2022.pdf",
                "createdAt": "1671800550379",
                "updatedAt": "1671800550379",
                "__typename": "UserDocument"
            },
            {
                "_id": "63a5a72a8346a7001ca618ef",
                "companyId": "6355a2d93971c7001cb6db09",
                "employeeId": "6371e18ccbc0d5001c27ca29",
                "documentTitle": "fasdadfa",
                "documentUrl": "http://eazipay.storage.googleapis.com/82183fff-1442-4246-9310-c6af439011b1-Employee.xlsx",
                "createdAt": "1671800618598",
                "updatedAt": "1671800618598",
                "__typename": "UserDocument"
            },
            {
                "_id": "63b97c8d0f6a2f001c59e9e6",
                "companyId": "6355a2d93971c7001cb6db09",
                "employeeId": "6371e18ccbc0d5001c27ca29",
                "documentTitle": "New",
                "documentUrl": "http://eazipay.storage.googleapis.com/92e915e1-b000-4db3-a837-87b4c2a58d78-giantfx.png",
                "createdAt": "1673100429640",
                "updatedAt": "1673100429640",
                "__typename": "UserDocument"
            }
        ],
        "companyAsset": [
            {
                "_id": "63886ad8530036001c8a3af8",
                "assetName": "Mac Book",
                "description": "fada",
                "dateReceived": "2022-12-01",
                "imageLink": "http://eazipay.storage.googleapis.com/upload_employee_profile_docs/f9352d3f-046d-48f9-b95b-73a7563bc940.jpg",
                "serialNumber": "fada",
                "tagNumber": "fadfa",
                "__typename": "CompanyAsset"
            }
        ],
        "prorate": [
            {
                "_id": "6373eaa3938bac001c270c32",
                "employeeId": "6371e18ccbc0d5001c27ca29",
                "month": 11,
                "year": 2022,
                "days": 14,
                "workingDaysPerWeek": 21,
                "dailySalary": 2476.1904761905,
                "proratedSalary": 34666.6666666667,
                "companyId": "6355a2d93971c7001cb6db09",
                "deleted": false,
                "__typename": "Prorate"
            }
        ],
        "health": {
            "bloodGroup": "",
            "genotype": "",
            "disabilities": "",
            "healthHistory": "",
            "__typename": "Health"
        },
        "family": {
            "maritalStatus": null,
            "nextOfKin": {
                "name": "",
                "relationship": "",
                "address": "",
                "phoneNumbers": [],
                "email": "",
                "dob": "",
                "__typename": "nextOfKinType"
            },
            "__typename": "FamilyType"
        },
        "jobHistory": [],
        "reportTo": {
            "_id": "6371e18ccbc0d5001c27ca29",
            "companyId": "6355a2d93971c7001cb6db09",
            "lastLogin": null,
            "createdAt": "2022-11-14T06:34:52.003Z",
            "updatedAt": "2023-03-15T20:56:44.103Z",
            "__typename": "Employee"
        },
        "education": {
            "history": [],
            "awards": [],
            "certificates": [],
            "__typename": "Education"
        },
        "createdAt": "2022-11-14T06:34:52.003Z",
        "updatedAt": "2023-03-15T20:56:44.103Z",
        "__typename": "Employee"
    },
    {
        "_id": "63725ab94783bb001c4febc1",
        "companyId": "6355a2d93971c7001cb6db09",
        "company": null,
        "profile": {
            "status": null,
            "password": null,
            "accountType": null,
            "firstName": "Grace",
            "lastName": "Jill",
            "middleName": "",
            "email": "rabayless@onlyu.link",
            "phone": "",
            "address": "",
            "country": "",
            "dob": "",
            "pfp": "",
            "state": "",
            "gender": "FEMALE",
            "title": "MR",
            "otherPhoneNumbers": [],
            "relationshipStatus": null,
            "picture": null,
            "ISO2": null,
            "birthday": null,
            "religion": "",
            "personalEmail": "",
            "nin": "",
            "taxId": "",
            "__typename": "EmployeeProfile"
        },
        "job": {
            "departmentId": "6412310b75b5d6001c8a9a28",
            "staffLevelId": "63725ab94783bb001c4febb9",
            "jobTitle": "Product Designer",
            "teamId": "",
            "userName": "Whyt-00011",
            "branchId": "63bd3650395a3c001c97b269",
            "employmentType": "FULLTIME",
            "reportTo": null,
            "hireDateString": "",
            "__typename": "EmployeeJob"
        },
        "emergency": [],
        "payment": {
            "bankName": "Zenith Bank",
            "accountName": "emmanuel whyte peter",
            "accountNumber": "2121340638",
            "accountResolved": true,
            "bankCode": "057",
            "monthlySalary": null,
            "recipientCode": "RCP_djss4ik7obyz3b1",
            "bankAccountType": "Not_Sure",
            "__typename": "EmployeePaymentDetails"
        },
        "lastLogin": null,
        "staffLevel": {
            "_id": "63725ab94783bb001c4febb9",
            "creatorId": "6355a2d93971c7001cb6db09",
            "companyId": "6355a2d93971c7001cb6db09",
            "title": "emmanuel whyte peter #6dcf461945ee2706",
            "usePercentageForAllowance": true,
            "grossAmount": 300000,
            "netAmount": 339323,
            "allowanceDetails": [
                {
                    "_id": "63725ab94783bb001c4febba",
                    "allowanceId": "6355a2d93971c7001cb6db0b",
                    "percentage": 25,
                    "amount": 75000,
                    "__typename": "AllowanceDetails"
                },
                {
                    "_id": "63725ab94783bb001c4febbb",
                    "allowanceId": "6355a2d93971c7001cb6db0c",
                    "percentage": 35,
                    "amount": 105000,
                    "__typename": "AllowanceDetails"
                },
                {
                    "_id": "63725ab94783bb001c4febbc",
                    "allowanceId": "6355a2d93971c7001cb6db0d",
                    "percentage": 25,
                    "amount": 75000,
                    "__typename": "AllowanceDetails"
                },
                {
                    "_id": "63725ab94783bb001c4febbd",
                    "allowanceId": "6355a342d11e0f001cc78d25",
                    "percentage": 10,
                    "amount": 30000,
                    "__typename": "AllowanceDetails"
                },
                {
                    "_id": "63725aed589b8e001cab758b",
                    "allowanceId": "63725ae5376c4b001cc2b6d0",
                    "percentage": 5,
                    "amount": 15000,
                    "__typename": "AllowanceDetails"
                }
            ],
            "additionalAllowanceDetails": [],
            "nhf": {
                "amount": 0,
                "__typename": "nhfType"
            },
            "pension": {
                "amount": 10000,
                "provider": "AIICO Pension Managers Limited",
                "providerPin": "",
                "employerPensionContribution": 0,
                "usePercentage": false,
                "employeePensionPin": "234567",
                "__typename": "pensionType"
            },
            "itf": {
                "amount": 0,
                "__typename": "itfType"
            },
            "nsitf": null,
            "paye": {
                "amount": 0,
                "stateForPaye": "Adamawa",
                "taxId": "234567",
                "__typename": "payeType"
            },
            "wht": {
                "amount": 100000,
                "percentage": 10,
                "paymentTypes": [
                    "RENT",
                    "ROYALTIES",
                    "CONSTRUCTION"
                ],
                "__typename": "whtType"
            },
            "lifeInsurance": {
                "provider": "ALLIANZ NIGERIA INSURANCE PLC",
                "amount": 30000,
                "duration": "MONTHLY",
                "__typename": "lifeInsuranceType"
            },
            "lifeAssurance": {
                "provider": "Cornerstone Insurance Plc",
                "amount": 39677,
                "duration": "MONTHLY",
                "__typename": "lifeAssuranceType"
            },
            "hmo": {
                "provider": "Hygeia HMO Limited",
                "amount": 1000,
                "duration": "MONTHLY",
                "plan": "BRONZE",
                "__typename": "hmoType"
            },
            "gratuity": null,
            "benefits": [
                "PAYE",
                "Pension",
                "HMO",
                "Group_Life_Insurance",
                "Employee_Life_Assurance",
                "WHT",
                null,
                "NHF",
                "ITF"
            ],
            "businessExpense": {
                "amount": 3000,
                "expenseName": "Expenditure",
                "__typename": "businessExpenseType"
            },
            "withholdingTax": true,
            "manually_inputted": false,
            "createdAt": "2022-11-14T15:11:53.403Z",
            "updatedAt": "2022-11-14T15:22:45.258Z",
            "__typename": "StaffLevel"
        },
        "branch": {
            "_id": "63bd3650395a3c001c97b269",
            "creatorId": "63b8466cbbb150001c11edf3",
            "companyId": "6355a2d93971c7001cb6db09",
            "name": "okpoma",
            "address": "Nigeria",
            "createdAt": "2023-01-10T09:56:32.474Z",
            "updatedAt": "2023-02-09T22:05:19.477Z",
            "__typename": "Branch"
        },
        "department": {
            "_id": "6412310b75b5d6001c8a9a28",
            "name": "testers 101",
            "creatorId": "63b8466cbbb150001c11edf3",
            "companyId": "6355a2d93971c7001cb6db09",
            "departmentHead": null,
            "createdAt": "2023-03-15T20:56:43.993Z",
            "updatedAt": "2023-03-15T20:56:43.993Z",
            "__typename": "DepartmentV3"
        },
        "userDocuments": [],
        "companyAsset": [],
        "prorate": [
            {
                "_id": "6374091f938bac001c270cd9",
                "employeeId": "63725ab94783bb001c4febc1",
                "month": 11,
                "year": 2022,
                "days": 29,
                "workingDaysPerWeek": 22,
                "dailySalary": 15423.7727272727,
                "proratedSalary": 447289.4090909091,
                "companyId": "6355a2d93971c7001cb6db09",
                "deleted": false,
                "__typename": "Prorate"
            }
        ],
        "health": {
            "bloodGroup": "",
            "genotype": "",
            "disabilities": "",
            "healthHistory": "",
            "__typename": "Health"
        },
        "family": {
            "maritalStatus": null,
            "nextOfKin": {
                "name": "",
                "relationship": "",
                "address": "",
                "phoneNumbers": [],
                "email": "",
                "dob": "",
                "__typename": "nextOfKinType"
            },
            "__typename": "FamilyType"
        },
        "jobHistory": [],
        "reportTo": null,
        "education": {
            "history": [],
            "awards": [],
            "certificates": [],
            "__typename": "Education"
        },
        "createdAt": "2022-11-14T15:11:53.448Z",
        "updatedAt": "2023-03-15T20:56:44.103Z",
        "__typename": "Employee"
    },
    {
        "_id": "637161bd69e08f001c41a83c",
        "companyId": "6355a2d93971c7001cb6db09",
        "company": null,
        "profile": {
            "status": "ACTIVE",
            "password": null,
            "accountType": null,
            "firstName": "Jake",
            "lastName": "Drey",
            "middleName": "",
            "email": "lerapestova@mitakian.com",
            "phone": "",
            "address": "",
            "country": "",
            "dob": "",
            "pfp": null,
            "state": "",
            "gender": "OTHER",
            "title": "MR",
            "otherPhoneNumbers": [],
            "relationshipStatus": null,
            "picture": null,
            "ISO2": null,
            "birthday": null,
            "religion": "",
            "personalEmail": "",
            "nin": "",
            "taxId": "",
            "__typename": "EmployeeProfile"
        },
        "job": {
            "departmentId": "6412310b75b5d6001c8a9a28",
            "staffLevelId": "637161bc69e08f001c41a82b",
            "jobTitle": "Cashier",
            "teamId": "",
            "userName": "Whyt-0009",
            "branchId": "63c9baffd9fe4e001cd9e530",
            "employmentType": "CONTRACT",
            "reportTo": null,
            "hireDateString": "",
            "__typename": "EmployeeJob"
        },
        "emergency": [],
        "payment": {
            "bankName": "Access Bank",
            "accountName": "emmanuel whyte peter",
            "accountNumber": "0805915974",
            "accountResolved": true,
            "bankCode": "044",
            "monthlySalary": null,
            "recipientCode": "",
            "bankAccountType": "Not_Sure",
            "__typename": "EmployeePaymentDetails"
        },
        "lastLogin": null,
        "staffLevel": {
            "_id": "637161bc69e08f001c41a82b",
            "creatorId": "6355a2d93971c7001cb6db09",
            "companyId": "6355a2d93971c7001cb6db09",
            "title": "emmanuel whyte peter #330c9092ce36eb92",
            "usePercentageForAllowance": true,
            "grossAmount": 999800,
            "netAmount": 94011,
            "allowanceDetails": [
                {
                    "_id": "637161bc69e08f001c41a82c",
                    "allowanceId": "6355a2d93971c7001cb6db0b",
                    "percentage": 25,
                    "amount": 249950,
                    "__typename": "AllowanceDetails"
                },
                {
                    "_id": "637161bc69e08f001c41a82d",
                    "allowanceId": "6355a2d93971c7001cb6db0c",
                    "percentage": 25,
                    "amount": 249950,
                    "__typename": "AllowanceDetails"
                },
                {
                    "_id": "637161bc69e08f001c41a82e",
                    "allowanceId": "6355a2d93971c7001cb6db0d",
                    "percentage": 25,
                    "amount": 249950,
                    "__typename": "AllowanceDetails"
                }
            ],
            "additionalAllowanceDetails": [],
            "nhf": null,
            "pension": null,
            "itf": null,
            "nsitf": null,
            "paye": null,
            "wht": {
                "amount": null,
                "percentage": null,
                "paymentTypes": [],
                "__typename": "whtType"
            },
            "lifeInsurance": {
                "provider": "AIICO Insurance Plc",
                "amount": 4000,
                "duration": "MONTHLY",
                "__typename": "lifeInsuranceType"
            },
            "lifeAssurance": null,
            "hmo": null,
            "gratuity": null,
            "benefits": [
                "Group_Life_Insurance"
            ],
            "businessExpense": null,
            "withholdingTax": false,
            "manually_inputted": false,
            "createdAt": "2022-11-13T21:29:32.978Z",
            "updatedAt": "2022-11-15T17:35:52.593Z",
            "__typename": "StaffLevel"
        },
        "branch": {
            "_id": "63c9baffd9fe4e001cd9e530",
            "creatorId": "63b8466cbbb150001c11edf3",
            "companyId": "6355a2d93971c7001cb6db09",
            "name": "usa branch",
            "address": "Nigeria",
            "createdAt": "2023-01-19T21:49:51.938Z",
            "updatedAt": "2023-02-09T22:05:27.153Z",
            "__typename": "Branch"
        },
        "department": {
            "_id": "6412310b75b5d6001c8a9a28",
            "name": "testers 101",
            "creatorId": "63b8466cbbb150001c11edf3",
            "companyId": "6355a2d93971c7001cb6db09",
            "departmentHead": null,
            "createdAt": "2023-03-15T20:56:43.993Z",
            "updatedAt": "2023-03-15T20:56:43.993Z",
            "__typename": "DepartmentV3"
        },
        "userDocuments": [
            {
                "_id": "6380e4deb11bea001cb0389c",
                "companyId": "6355a2d93971c7001cb6db09",
                "employeeId": "637161bd69e08f001c41a83c",
                "documentTitle": "WAEC",
                "documentUrl": "http://eazipay.storage.googleapis.com/upload_employee_profile_docs/e46cbfbe-f1e6-4e5e-b17c-1b4a1cf48968.jpg",
                "createdAt": "1669391582719",
                "updatedAt": "1669391582719",
                "__typename": "UserDocument"
            },
            {
                "_id": "6380f524b11bea001cb038ce",
                "companyId": "6355a2d93971c7001cb6db09",
                "employeeId": "637161bd69e08f001c41a83c",
                "documentTitle": "",
                "documentUrl": "http://eazipay.storage.googleapis.com/upload_employee_profile_docs/a16f2c24-7d27-4bbe-963b-217005d4d581.jpg",
                "createdAt": "1669395748972",
                "updatedAt": "1669395748972",
                "__typename": "UserDocument"
            },
            {
                "_id": "6380f54f822d60001c2ed149",
                "companyId": "6355a2d93971c7001cb6db09",
                "employeeId": "637161bd69e08f001c41a83c",
                "documentTitle": "Avatar",
                "documentUrl": "http://eazipay.storage.googleapis.com/upload_employee_profile_docs/46fe411b-f6c9-47a5-8d08-097a82394178.jpg",
                "createdAt": "1669395791294",
                "updatedAt": "1669395791294",
                "__typename": "UserDocument"
            },
            {
                "_id": "6380f5be68df0b001c21b4b9",
                "companyId": "6355a2d93971c7001cb6db09",
                "employeeId": "637161bd69e08f001c41a83c",
                "documentTitle": "PDF Profile",
                "documentUrl": "http://eazipay.storage.googleapis.com/upload_employee_profile_docs/cf8231a1-5ea2-4e84-a866-accb7b7ee995.jpg",
                "createdAt": "1669395902844",
                "updatedAt": "1669396089623",
                "__typename": "UserDocument"
            },
            {
                "_id": "6380f60ab11bea001cb038df",
                "companyId": "6355a2d93971c7001cb6db09",
                "employeeId": "637161bd69e08f001c41a83c",
                "documentTitle": "",
                "documentUrl": "http://eazipay.storage.googleapis.com/upload_employee_profile_docs/30ec4a68-6915-436b-8223-2b8eddb68edc.jpg",
                "createdAt": "1669395978303",
                "updatedAt": "1669395978303",
                "__typename": "UserDocument"
            }
        ],
        "companyAsset": [
            {
                "_id": "6380e5eb68df0b001c21b477",
                "assetName": "Mac Book Air",
                "description": "Another laptop from Grofts",
                "dateReceived": "2022-11-20",
                "imageLink": "http://eazipay.storage.googleapis.com/upload_employee_profile_docs/af50e0fb-10a1-40b8-9b33-0223d85d5090.jpg",
                "serialNumber": "3243141231",
                "tagNumber": "YIH-3",
                "__typename": "CompanyAsset"
            },
            {
                "_id": "6380e6d0b11bea001cb038a6",
                "assetName": "Mac Book Pro",
                "description": "From Grofts Store",
                "dateReceived": "2022-11-15",
                "imageLink": "http://eazipay.storage.googleapis.com/upload_employee_profile_docs/19aed162-0904-4263-af5b-9c3c69ac3dc5.jpg",
                "serialNumber": "324320290",
                "tagNumber": "YIH-2",
                "__typename": "CompanyAsset"
            }
        ],
        "prorate": [],
        "health": {
            "bloodGroup": "",
            "genotype": "",
            "disabilities": "",
            "healthHistory": "",
            "__typename": "Health"
        },
        "family": {
            "maritalStatus": null,
            "nextOfKin": {
                "name": "",
                "relationship": "",
                "address": "",
                "phoneNumbers": [],
                "email": "",
                "dob": "",
                "__typename": "nextOfKinType"
            },
            "__typename": "FamilyType"
        },
        "jobHistory": [],
        "reportTo": null,
        "education": {
            "history": [
                {
                    "_id": "6380f044822d60001c2ed11d",
                    "institutionName": "Niger Delta University",
                    "degree": "BSc",
                    "courseOfStudy": "Computer Science",
                    "grade": "First Class Upper",
                    "graduationYear": "2022",
                    "description": "Last Last School Na Scam",
                    "imageLink": "http://eazipay.storage.googleapis.com/upload_employee_profile_docs/6f3e3fd2-bfdf-49fa-93a8-38b5e4ee8603.jpg",
                    "__typename": "EducationHistory"
                },
                {
                    "_id": "6380f044822d60001c2ed11e",
                    "institutionName": "University Of Port Harcourt",
                    "degree": "PHD",
                    "courseOfStudy": "Business Administration",
                    "grade": "First Class Upper",
                    "graduationYear": "2022",
                    "description": "",
                    "imageLink": "http://eazipay.storage.googleapis.com/upload_employee_profile_docs/50c96ff5-aff8-4c73-be91-e8027e75ed52.jpg",
                    "__typename": "EducationHistory"
                }
            ],
            "awards": [
                {
                    "_id": "6380ef9f68df0b001c21b48e",
                    "awardReceived": "Best Staying At Home",
                    "awardingOrganisation": "HMOW",
                    "dateObtained": "2022-11-20",
                    "imageLink": "http://eazipay.storage.googleapis.com/upload_employee_profile_docs/9ae5ce19-f740-4e69-a54d-db97f31fd83d.jpg",
                    "__typename": "Award"
                }
            ],
            "certificates": [
                {
                    "_id": "6380ee51b11bea001cb038aa",
                    "title": "BSC",
                    "awardingInstitution": "Niger Delta University",
                    "dateObtained": "2022-11-25",
                    "expiryDate": "2022-11-25",
                    "imageLink": "http://eazipay.storage.googleapis.com/upload_employee_profile_docs/e62b2384-d33d-44d6-8008-e84600c81598.jpg",
                    "__typename": "EducationCertificate"
                },
                {
                    "_id": "6380ef03b11bea001cb038ad",
                    "title": "PHD",
                    "awardingInstitution": "University Of Port Harcourt",
                    "dateObtained": "2022-11-04",
                    "expiryDate": "2022-11-05",
                    "imageLink": "http://eazipay.storage.googleapis.com/upload_employee_profile_docs/ef60e146-0323-457d-93e3-3a4755d7ead2.jpg",
                    "__typename": "EducationCertificate"
                }
            ],
            "__typename": "Education"
        },
        "createdAt": "2022-11-13T21:29:33.153Z",
        "updatedAt": "2023-03-15T20:56:44.103Z",
        "__typename": "Employee"
    },
    {
        "_id": "6371632e69e08f001c41a858",
        "companyId": "6355a2d93971c7001cb6db09",
        "company": null,
        "profile": {
            "status": null,
            "password": null,
            "accountType": null,
            "firstName": "Jane",
            "lastName": "Munla",
            "middleName": "",
            "email": "swills1313@mymailcr.com",
            "phone": "2348103139758",
            "address": "",
            "country": "",
            "dob": "",
            "pfp": "",
            "state": "",
            "gender": "FEMALE",
            "title": "MRS",
            "otherPhoneNumbers": [],
            "relationshipStatus": null,
            "picture": null,
            "ISO2": null,
            "birthday": null,
            "religion": "",
            "personalEmail": "",
            "nin": "",
            "taxId": "",
            "__typename": "EmployeeProfile"
        },
        "job": {
            "departmentId": "64122b6153b0a7001ccebaa4",
            "staffLevelId": "6371632e69e08f001c41a850",
            "jobTitle": "Product Designer",
            "teamId": "",
            "userName": "Whyt-0008",
            "branchId": "63c9baffd9fe4e001cd9e530",
            "employmentType": "NYSC",
            "reportTo": null,
            "hireDateString": "",
            "__typename": "EmployeeJob"
        },
        "emergency": [],
        "payment": {
            "bankName": "Access Bank",
            "accountName": "olumide tajudeen jimoh",
            "accountNumber": "1111111111",
            "accountResolved": true,
            "bankCode": "044",
            "monthlySalary": null,
            "recipientCode": "RCP_beqi2qrmn3t8iu1",
            "bankAccountType": "Not_Sure",
            "__typename": "EmployeePaymentDetails"
        },
        "lastLogin": null,
        "staffLevel": {
            "_id": "6371632e69e08f001c41a850",
            "creatorId": "6355a2d93971c7001cb6db09",
            "companyId": "6355a2d93971c7001cb6db09",
            "title": "emmanuel whyte peter #bf287852c623b73e",
            "usePercentageForAllowance": true,
            "grossAmount": 5000,
            "netAmount": -195003,
            "allowanceDetails": [
                {
                    "_id": "6371632e69e08f001c41a851",
                    "allowanceId": "6355a2d93971c7001cb6db0b",
                    "percentage": 25,
                    "amount": 1250,
                    "__typename": "AllowanceDetails"
                },
                {
                    "_id": "6371632e69e08f001c41a852",
                    "allowanceId": "6355a2d93971c7001cb6db0c",
                    "percentage": 25,
                    "amount": 1250,
                    "__typename": "AllowanceDetails"
                },
                {
                    "_id": "6371632e69e08f001c41a853",
                    "allowanceId": "6355a2d93971c7001cb6db0d",
                    "percentage": 25,
                    "amount": 1250,
                    "__typename": "AllowanceDetails"
                },
                {
                    "_id": "6371632e69e08f001c41a854",
                    "allowanceId": "6355a342d11e0f001cc78d25",
                    "percentage": 25,
                    "amount": 1250,
                    "__typename": "AllowanceDetails"
                }
            ],
            "additionalAllowanceDetails": [],
            "nhf": {
                "amount": 0,
                "__typename": "nhfType"
            },
            "pension": {
                "amount": 5000,
                "provider": "AIICO Pension Managers Limited",
                "providerPin": "",
                "employerPensionContribution": 0,
                "usePercentage": false,
                "employeePensionPin": "12345",
                "__typename": "pensionType"
            },
            "itf": {
                "amount": 0,
                "__typename": "itfType"
            },
            "nsitf": null,
            "paye": {
                "amount": 0,
                "stateForPaye": "Abia",
                "taxId": "2345",
                "__typename": "payeType"
            },
            "wht": {
                "amount": 5,
                "percentage": 5,
                "paymentTypes": [
                    "ROYALTIES",
                    "RENT",
                    "CONSTRUCTION"
                ],
                "__typename": "whtType"
            },
            "lifeInsurance": {
                "provider": "AIICO Insurance Plc",
                "amount": 100000,
                "duration": "MONTHLY",
                "__typename": "lifeInsuranceType"
            },
            "lifeAssurance": {
                "provider": "African Alliance Insurance Company Ltd",
                "amount": 100000,
                "duration": "MONTHLY",
                "__typename": "lifeAssuranceType"
            },
            "hmo": {
                "provider": "Reliance HMO Limited",
                "amount": 100003,
                "duration": "MONTHLY",
                "plan": "BRONZE",
                "__typename": "hmoType"
            },
            "gratuity": {
                "salaryAmount": 100000,
                "yearsWorked": 2,
                "amount": 1000,
                "__typename": "gratuityType"
            },
            "benefits": [
                null,
                "Gratuity",
                "NHF",
                "ITF",
                "WHT",
                "Employee_Life_Assurance",
                "Group_Life_Insurance",
                "HMO",
                "PAYE",
                "Pension"
            ],
            "businessExpense": {
                "amount": 100000,
                "expenseName": "Expense",
                "__typename": "businessExpenseType"
            },
            "withholdingTax": false,
            "manually_inputted": false,
            "createdAt": "2022-11-13T21:35:42.609Z",
            "updatedAt": "2022-11-14T10:28:11.473Z",
            "__typename": "StaffLevel"
        },
        "branch": {
            "_id": "63c9baffd9fe4e001cd9e530",
            "creatorId": "63b8466cbbb150001c11edf3",
            "companyId": "6355a2d93971c7001cb6db09",
            "name": "usa branch",
            "address": "Nigeria",
            "createdAt": "2023-01-19T21:49:51.938Z",
            "updatedAt": "2023-02-09T22:05:27.153Z",
            "__typename": "Branch"
        },
        "department": {
            "_id": "64122b6153b0a7001ccebaa4",
            "name": "testing oooo",
            "creatorId": "63b8466cbbb150001c11edf3",
            "companyId": "6355a2d93971c7001cb6db09",
            "departmentHead": null,
            "createdAt": "2023-03-15T20:32:33.406Z",
            "updatedAt": "2023-03-15T20:32:33.406Z",
            "__typename": "DepartmentV3"
        },
        "userDocuments": [],
        "companyAsset": [],
        "prorate": [],
        "health": {
            "bloodGroup": "",
            "genotype": "",
            "disabilities": "",
            "healthHistory": "",
            "__typename": "Health"
        },
        "family": {
            "maritalStatus": null,
            "nextOfKin": {
                "name": "",
                "relationship": "",
                "address": "",
                "phoneNumbers": [],
                "email": "",
                "dob": "",
                "__typename": "nextOfKinType"
            },
            "__typename": "FamilyType"
        },
        "jobHistory": [],
        "reportTo": null,
        "education": {
            "history": [],
            "awards": [],
            "certificates": [],
            "__typename": "Education"
        },
        "createdAt": "2022-11-13T21:35:42.712Z",
        "updatedAt": "2023-03-15T20:32:33.527Z",
        "__typename": "Employee"
    },
    {
        "_id": "637f8ae7fbcf49001c160b95",
        "companyId": "6355a2d93971c7001cb6db09",
        "company": null,
        "profile": {
            "status": "ACTIVE",
            "password": null,
            "accountType": null,
            "firstName": "Jane",
            "lastName": "Gasoline",
            "middleName": "",
            "email": "janegosoline@gmail.com",
            "phone": "2349108139846",
            "address": "",
            "country": "",
            "dob": "",
            "pfp": null,
            "state": "",
            "gender": "FEMALE",
            "title": "MRS",
            "otherPhoneNumbers": [],
            "relationshipStatus": null,
            "picture": null,
            "ISO2": null,
            "birthday": null,
            "religion": "",
            "personalEmail": "",
            "nin": "",
            "taxId": "",
            "__typename": "EmployeeProfile"
        },
        "job": {
            "departmentId": "63c9be4262b118001c7ff69e",
            "staffLevelId": "637f8ae7fbcf49001c160b7d",
            "jobTitle": "Senior Back End Engineer",
            "teamId": "",
            "userName": "Whyt-00013",
            "branchId": "63c9baffd9fe4e001cd9e532",
            "employmentType": "FULLTIME",
            "reportTo": null,
            "hireDateString": "",
            "__typename": "EmployeeJob"
        },
        "emergency": [],
        "payment": {
            "bankName": "Access Bank",
            "accountName": "emmanuel whyte peter",
            "accountNumber": "0805915974",
            "accountResolved": true,
            "bankCode": "044",
            "monthlySalary": null,
            "recipientCode": "",
            "bankAccountType": "Not_Sure",
            "__typename": "EmployeePaymentDetails"
        },
        "lastLogin": null,
        "staffLevel": {
            "_id": "637f8ae7fbcf49001c160b7d",
            "creatorId": "6355a2d93971c7001cb6db09",
            "companyId": "6355a2d93971c7001cb6db09",
            "title": "emmanuel whyte peter #f140f3718f7bff52",
            "usePercentageForAllowance": true,
            "grossAmount": 5000000,
            "netAmount": 3934386.13,
            "allowanceDetails": [
                {
                    "_id": "637f8ae7fbcf49001c160b7e",
                    "allowanceId": "6355a342d11e0f001cc78d25",
                    "percentage": 10,
                    "amount": null,
                    "__typename": "AllowanceDetails"
                },
                {
                    "_id": "637f8ae7fbcf49001c160b7f",
                    "allowanceId": "6355a2d93971c7001cb6db0b",
                    "percentage": 10,
                    "amount": null,
                    "__typename": "AllowanceDetails"
                },
                {
                    "_id": "637f8ae7fbcf49001c160b80",
                    "allowanceId": "6355a2d93971c7001cb6db0c",
                    "percentage": 10,
                    "amount": null,
                    "__typename": "AllowanceDetails"
                },
                {
                    "_id": "637f8ae7fbcf49001c160b81",
                    "allowanceId": "6355a2d93971c7001cb6db0d",
                    "percentage": 20,
                    "amount": null,
                    "__typename": "AllowanceDetails"
                },
                {
                    "_id": "637f8ae7fbcf49001c160b82",
                    "allowanceId": "63725ae5376c4b001cc2b6d0",
                    "percentage": 10,
                    "amount": null,
                    "__typename": "AllowanceDetails"
                },
                {
                    "_id": "637f8ae7fbcf49001c160b83",
                    "allowanceId": "637618f1c8b8e9001cf255d2",
                    "percentage": 10,
                    "amount": null,
                    "__typename": "AllowanceDetails"
                },
                {
                    "_id": "637f8ae7fbcf49001c160b84",
                    "allowanceId": "637618f1c8b8e9001cf255d5",
                    "percentage": 20,
                    "amount": null,
                    "__typename": "AllowanceDetails"
                },
                {
                    "_id": "637f8ae7fbcf49001c160b85",
                    "allowanceId": "637618f1c8b8e9001cf255d8",
                    "percentage": 10,
                    "amount": null,
                    "__typename": "AllowanceDetails"
                }
            ],
            "additionalAllowanceDetails": [],
            "nhf": null,
            "pension": {
                "amount": 360000,
                "provider": "AIICO Pension Managers Limited",
                "providerPin": "",
                "employerPensionContribution": 0,
                "usePercentage": false,
                "employeePensionPin": "esfaer4",
                "__typename": "pensionType"
            },
            "itf": null,
            "nsitf": null,
            "paye": {
                "amount": 897613.86,
                "stateForPaye": "Adamawa",
                "taxId": "132435",
                "__typename": "payeType"
            },
            "wht": null,
            "lifeInsurance": {
                "provider": "African Alliance Insurance Company Ltd",
                "amount": 5000,
                "duration": "MONTHLY",
                "__typename": "lifeInsuranceType"
            },
            "lifeAssurance": null,
            "hmo": {
                "provider": "Reliance HMO Limited",
                "amount": 8000,
                "duration": "MONTHLY",
                "plan": "BRONZE",
                "__typename": "hmoType"
            },
            "gratuity": null,
            "benefits": [
                "PAYE",
                "Pension",
                "HMO",
                "Group_Life_Insurance"
            ],
            "businessExpense": null,
            "withholdingTax": false,
            "manually_inputted": false,
            "createdAt": "2022-11-24T15:16:55.595Z",
            "updatedAt": "2022-11-24T15:16:55.595Z",
            "__typename": "StaffLevel"
        },
        "branch": {
            "_id": "63c9baffd9fe4e001cd9e532",
            "creatorId": "63b8466cbbb150001c11edf3",
            "companyId": "6355a2d93971c7001cb6db09",
            "name": "lagos branch",
            "address": "Nigeria",
            "createdAt": "2023-01-19T21:49:51.941Z",
            "updatedAt": "2023-02-09T22:05:36.241Z",
            "__typename": "Branch"
        },
        "department": {
            "_id": "63c9be4262b118001c7ff69e",
            "name": "front desk officer",
            "creatorId": "63b8466cbbb150001c11edf3",
            "companyId": "6355a2d93971c7001cb6db09",
            "departmentHead": "63725ab94783bb001c4febc1",
            "createdAt": "2023-01-19T22:03:46.038Z",
            "updatedAt": "2023-02-09T22:04:56.719Z",
            "__typename": "DepartmentV3"
        },
        "userDocuments": [],
        "companyAsset": [],
        "prorate": [],
        "health": {
            "bloodGroup": "",
            "genotype": "",
            "disabilities": "",
            "healthHistory": "",
            "__typename": "Health"
        },
        "family": {
            "maritalStatus": null,
            "nextOfKin": {
                "name": "",
                "relationship": "",
                "address": "",
                "phoneNumbers": [],
                "email": "",
                "dob": "",
                "__typename": "nextOfKinType"
            },
            "__typename": "FamilyType"
        },
        "jobHistory": [],
        "reportTo": null,
        "education": {
            "history": [],
            "awards": [],
            "certificates": [],
            "__typename": "Education"
        },
        "createdAt": "2022-11-24T15:16:55.620Z",
        "updatedAt": "2023-02-09T22:05:36.350Z",
        "__typename": "Employee"
    },
    {
        "_id": "63562e18522f54001c5243af",
        "companyId": "6355a2d93971c7001cb6db09",
        "company": null,
        "profile": {
            "status": "ACTIVE",
            "password": null,
            "accountType": null,
            "firstName": "John",
            "lastName": "Doe",
            "middleName": "",
            "email": "johndoe@gmail.com",
            "phone": "2348108139759",
            "address": "",
            "country": "",
            "dob": "",
            "pfp": null,
            "state": "",
            "gender": "OTHER",
            "title": null,
            "otherPhoneNumbers": [],
            "relationshipStatus": null,
            "picture": null,
            "ISO2": null,
            "birthday": null,
            "religion": null,
            "personalEmail": null,
            "nin": "",
            "taxId": "",
            "__typename": "EmployeeProfile"
        },
        "job": {
            "departmentId": "63c9be4262b118001c7ff69e",
            "staffLevelId": "63562e18522f54001c5243a7",
            "jobTitle": "Product Designer",
            "teamId": "",
            "userName": "",
            "branchId": "63c9baffd9fe4e001cd9e532",
            "employmentType": "FULLTIME_REMOTE",
            "reportTo": null,
            "hireDateString": "",
            "__typename": "EmployeeJob"
        },
        "emergency": [],
        "payment": {
            "bankName": "Zenith Bank",
            "accountName": "emmanuel whyte peter",
            "accountNumber": "2121340638",
            "accountResolved": true,
            "bankCode": "057",
            "monthlySalary": null,
            "recipientCode": "",
            "bankAccountType": "Not_Sure",
            "__typename": "EmployeePaymentDetails"
        },
        "lastLogin": null,
        "staffLevel": {
            "_id": "63562e18522f54001c5243a7",
            "creatorId": "6355a2d93971c7001cb6db09",
            "companyId": "6355a2d93971c7001cb6db09",
            "title": "emmanuel whyte peter #c07ff5f0804366a0",
            "usePercentageForAllowance": true,
            "grossAmount": 250000,
            "netAmount": 80000,
            "allowanceDetails": [
                {
                    "_id": "63562e18522f54001c5243a8",
                    "allowanceId": "6355a2d93971c7001cb6db0b",
                    "percentage": 30,
                    "amount": 75000,
                    "__typename": "AllowanceDetails"
                },
                {
                    "_id": "63562e18522f54001c5243a9",
                    "allowanceId": "6355a2d93971c7001cb6db0c",
                    "percentage": 25,
                    "amount": 62500,
                    "__typename": "AllowanceDetails"
                },
                {
                    "_id": "63562e18522f54001c5243aa",
                    "allowanceId": "6355a2d93971c7001cb6db0d",
                    "percentage": 40,
                    "amount": 100000,
                    "__typename": "AllowanceDetails"
                },
                {
                    "_id": "63562e18522f54001c5243ab",
                    "allowanceId": "6355a342d11e0f001cc78d25",
                    "percentage": 5,
                    "amount": 12500,
                    "__typename": "AllowanceDetails"
                }
            ],
            "additionalAllowanceDetails": [],
            "nhf": {
                "amount": 6250,
                "__typename": "nhfType"
            },
            "pension": null,
            "itf": null,
            "nsitf": {
                "amount": 2500,
                "__typename": "nsitfType"
            },
            "paye": {
                "amount": 6250,
                "stateForPaye": "",
                "taxId": "",
                "__typename": "payeType"
            },
            "wht": null,
            "lifeInsurance": null,
            "lifeAssurance": null,
            "hmo": {
                "provider": "Hygeia HMO Limited",
                "amount": 170000,
                "duration": "ANNUALLY",
                "plan": "GOLD",
                "__typename": "hmoType"
            },
            "gratuity": null,
            "benefits": [
                "PAYE",
                "HMO",
                "NSITF",
                "NHF"
            ],
            "businessExpense": null,
            "withholdingTax": false,
            "manually_inputted": false,
            "createdAt": "2022-10-24T06:18:00.798Z",
            "updatedAt": "2022-11-14T10:28:11.783Z",
            "__typename": "StaffLevel"
        },
        "branch": {
            "_id": "63c9baffd9fe4e001cd9e532",
            "creatorId": "63b8466cbbb150001c11edf3",
            "companyId": "6355a2d93971c7001cb6db09",
            "name": "lagos branch",
            "address": "Nigeria",
            "createdAt": "2023-01-19T21:49:51.941Z",
            "updatedAt": "2023-02-09T22:05:36.241Z",
            "__typename": "Branch"
        },
        "department": {
            "_id": "63c9be4262b118001c7ff69e",
            "name": "front desk officer",
            "creatorId": "63b8466cbbb150001c11edf3",
            "companyId": "6355a2d93971c7001cb6db09",
            "departmentHead": "63725ab94783bb001c4febc1",
            "createdAt": "2023-01-19T22:03:46.038Z",
            "updatedAt": "2023-02-09T22:04:56.719Z",
            "__typename": "DepartmentV3"
        },
        "userDocuments": [],
        "companyAsset": [],
        "prorate": [
            {
                "_id": "63562e19522f54001c5243b5",
                "employeeId": "63562e18522f54001c5243af",
                "month": 0,
                "year": 0,
                "days": 0,
                "workingDaysPerWeek": 31,
                "dailySalary": 2580.6451612903,
                "proratedSalary": 0,
                "companyId": "6355a2d93971c7001cb6db09",
                "deleted": false,
                "__typename": "Prorate"
            }
        ],
        "health": {
            "bloodGroup": "",
            "genotype": "",
            "disabilities": "",
            "healthHistory": "",
            "__typename": "Health"
        },
        "family": {
            "maritalStatus": null,
            "nextOfKin": {
                "name": "",
                "relationship": "",
                "address": "",
                "phoneNumbers": [],
                "email": "",
                "dob": null,
                "__typename": "nextOfKinType"
            },
            "__typename": "FamilyType"
        },
        "jobHistory": [],
        "reportTo": null,
        "education": {
            "history": [],
            "awards": [],
            "certificates": [],
            "__typename": "Education"
        },
        "createdAt": "2022-10-24T06:18:00.892Z",
        "updatedAt": "2023-02-09T22:05:36.350Z",
        "__typename": "Employee"
    },
    {
        "_id": "637f8982fbcf49001c160b3b",
        "companyId": "6355a2d93971c7001cb6db09",
        "company": null,
        "profile": {
            "status": "ACTIVE",
            "password": null,
            "accountType": null,
            "firstName": "John",
            "lastName": "Bull",
            "middleName": "",
            "email": "johnbull@gmail.com",
            "phone": "2348101139758",
            "address": "",
            "country": "",
            "dob": "",
            "pfp": null,
            "state": "",
            "gender": "MALE",
            "title": "MR",
            "otherPhoneNumbers": [],
            "relationshipStatus": null,
            "picture": null,
            "ISO2": null,
            "birthday": null,
            "religion": "",
            "personalEmail": "",
            "nin": "",
            "taxId": "",
            "__typename": "EmployeeProfile"
        },
        "job": {
            "departmentId": "63c9be4262b118001c7ff6a0",
            "staffLevelId": "637f8982fbcf49001c160b23",
            "jobTitle": "Cashier",
            "teamId": "",
            "userName": "Whyt-00012",
            "branchId": "63c9baffd9fe4e001cd9e532",
            "employmentType": "FULLTIME",
            "reportTo": null,
            "hireDateString": "",
            "__typename": "EmployeeJob"
        },
        "emergency": [],
        "payment": {
            "bankName": "Access Bank",
            "accountName": "emmanuel whyte peter",
            "accountNumber": "0805915974",
            "accountResolved": true,
            "bankCode": "044",
            "monthlySalary": null,
            "recipientCode": "",
            "bankAccountType": "Not_Sure",
            "__typename": "EmployeePaymentDetails"
        },
        "lastLogin": null,
        "staffLevel": {
            "_id": "637f8982fbcf49001c160b23",
            "creatorId": "6355a2d93971c7001cb6db09",
            "companyId": "6355a2d93971c7001cb6db09",
            "title": "emmanuel whyte peter #d7fb042bd66c9c27",
            "usePercentageForAllowance": true,
            "grossAmount": 200000,
            "netAmount": 167052.53,
            "allowanceDetails": [
                {
                    "_id": "637f8982fbcf49001c160b24",
                    "allowanceId": "6355a342d11e0f001cc78d25",
                    "percentage": 20,
                    "amount": null,
                    "__typename": "AllowanceDetails"
                },
                {
                    "_id": "637f8982fbcf49001c160b25",
                    "allowanceId": "6355a2d93971c7001cb6db0b",
                    "percentage": 20,
                    "amount": null,
                    "__typename": "AllowanceDetails"
                },
                {
                    "_id": "637f8982fbcf49001c160b26",
                    "allowanceId": "6355a2d93971c7001cb6db0c",
                    "percentage": 20,
                    "amount": null,
                    "__typename": "AllowanceDetails"
                },
                {
                    "_id": "637f8982fbcf49001c160b27",
                    "allowanceId": "6355a2d93971c7001cb6db0d",
                    "percentage": 20,
                    "amount": null,
                    "__typename": "AllowanceDetails"
                },
                {
                    "_id": "637f8982fbcf49001c160b28",
                    "allowanceId": "637618f1c8b8e9001cf255d5",
                    "percentage": 20,
                    "amount": null,
                    "__typename": "AllowanceDetails"
                }
            ],
            "additionalAllowanceDetails": [],
            "nhf": null,
            "pension": {
                "amount": 21600,
                "provider": "AIICO Pension Managers Limited",
                "providerPin": "",
                "employerPensionContribution": 0,
                "usePercentage": false,
                "employeePensionPin": "23245364",
                "__typename": "pensionType"
            },
            "itf": null,
            "nsitf": null,
            "paye": {
                "amount": 18347.46,
                "stateForPaye": "Abia",
                "taxId": "rtrytd",
                "__typename": "payeType"
            },
            "wht": null,
            "lifeInsurance": null,
            "lifeAssurance": null,
            "hmo": {
                "provider": "Reliance HMO Limited",
                "amount": 5000,
                "duration": "MONTHLY",
                "plan": "BRONZE",
                "__typename": "hmoType"
            },
            "gratuity": null,
            "benefits": [
                "PAYE",
                "Pension",
                "HMO"
            ],
            "businessExpense": null,
            "withholdingTax": false,
            "manually_inputted": false,
            "createdAt": "2022-11-24T15:10:58.680Z",
            "updatedAt": "2022-11-24T15:10:58.680Z",
            "__typename": "StaffLevel"
        },
        "branch": {
            "_id": "63c9baffd9fe4e001cd9e532",
            "creatorId": "63b8466cbbb150001c11edf3",
            "companyId": "6355a2d93971c7001cb6db09",
            "name": "lagos branch",
            "address": "Nigeria",
            "createdAt": "2023-01-19T21:49:51.941Z",
            "updatedAt": "2023-02-09T22:05:36.241Z",
            "__typename": "Branch"
        },
        "department": {
            "_id": "63c9be4262b118001c7ff6a0",
            "name": "product design",
            "creatorId": "63b8466cbbb150001c11edf3",
            "companyId": "6355a2d93971c7001cb6db09",
            "departmentHead": "6371632e69e08f001c41a858",
            "createdAt": "2023-01-19T22:03:46.047Z",
            "updatedAt": "2023-02-09T22:04:09.442Z",
            "__typename": "DepartmentV3"
        },
        "userDocuments": [],
        "companyAsset": [],
        "prorate": [],
        "health": {
            "bloodGroup": "",
            "genotype": "",
            "disabilities": "",
            "healthHistory": "",
            "__typename": "Health"
        },
        "family": {
            "maritalStatus": null,
            "nextOfKin": {
                "name": "",
                "relationship": "",
                "address": "",
                "phoneNumbers": [],
                "email": "",
                "dob": "",
                "__typename": "nextOfKinType"
            },
            "__typename": "FamilyType"
        },
        "jobHistory": [],
        "reportTo": null,
        "education": {
            "history": [],
            "awards": [],
            "certificates": [],
            "__typename": "Education"
        },
        "createdAt": "2022-11-24T15:10:58.722Z",
        "updatedAt": "2023-02-09T22:05:36.350Z",
        "__typename": "Employee"
    },
    {
        "_id": "6357f5a4ed4142001cda8b41",
        "companyId": "6355a2d93971c7001cb6db09",
        "company": null,
        "profile": {
            "status": null,
            "password": null,
            "accountType": null,
            "firstName": "Jombo",
            "lastName": "Killer",
            "middleName": "",
            "email": "jombokiller@gmail.com",
            "phone": "8397420087",
            "address": "",
            "country": "",
            "dob": "2022-11-05",
            "pfp": null,
            "state": "Adamawa",
            "gender": "OTHER",
            "title": null,
            "otherPhoneNumbers": [],
            "relationshipStatus": null,
            "picture": null,
            "ISO2": null,
            "birthday": null,
            "religion": "CHRISTIAN",
            "personalEmail": "",
            "nin": "",
            "taxId": "",
            "__typename": "EmployeeProfile"
        },
        "job": {
            "departmentId": "64122d2053b0a7001ccebab5",
            "staffLevelId": "6357f5a4ed4142001cda8b3f",
            "jobTitle": "Senior Front End Engineer",
            "teamId": "",
            "userName": "KJHBFA",
            "branchId": "63c9baffd9fe4e001cd9e534",
            "employmentType": "FULLTIME",
            "reportTo": "6357f5a4ed4142001cda8b3d",
            "hireDateString": "2022-11-05",
            "__typename": "EmployeeJob"
        },
        "emergency": [],
        "payment": {
            "bankName": "Emmanuel Whyte Peter",
            "accountName": "",
            "accountNumber": "2121340638",
            "accountResolved": false,
            "bankCode": "057",
            "monthlySalary": null,
            "recipientCode": "",
            "bankAccountType": "Not_Sure",
            "__typename": "EmployeePaymentDetails"
        },
        "lastLogin": null,
        "staffLevel": {
            "_id": "6357f5a4ed4142001cda8b3f",
            "creatorId": "6355a2d93971c7001cb6db09",
            "companyId": "6355a2d93971c7001cb6db09",
            "title": "Jombo Killer #31ad7f244ab64d7b",
            "usePercentageForAllowance": true,
            "grossAmount": 0,
            "netAmount": 0,
            "allowanceDetails": [],
            "additionalAllowanceDetails": [],
            "nhf": null,
            "pension": null,
            "itf": null,
            "nsitf": null,
            "paye": null,
            "wht": null,
            "lifeInsurance": null,
            "lifeAssurance": null,
            "hmo": null,
            "gratuity": null,
            "benefits": [],
            "businessExpense": null,
            "withholdingTax": false,
            "manually_inputted": false,
            "createdAt": "2022-10-25T14:41:40.794Z",
            "updatedAt": "2022-10-25T14:41:40.794Z",
            "__typename": "StaffLevel"
        },
        "branch": {
            "_id": "63c9baffd9fe4e001cd9e534",
            "creatorId": "63b8466cbbb150001c11edf3",
            "companyId": "6355a2d93971c7001cb6db09",
            "name": "bayelsa branch",
            "address": "Nigeria",
            "createdAt": "2023-01-19T21:49:51.943Z",
            "updatedAt": "2023-01-19T21:49:51.943Z",
            "__typename": "Branch"
        },
        "department": {
            "_id": "64122d2053b0a7001ccebab5",
            "name": "department",
            "creatorId": "63b8466cbbb150001c11edf3",
            "companyId": "6355a2d93971c7001cb6db09",
            "departmentHead": null,
            "createdAt": "2023-03-15T20:40:00.004Z",
            "updatedAt": "2023-03-15T20:40:00.004Z",
            "__typename": "DepartmentV3"
        },
        "userDocuments": [
            {
                "_id": "6364effb4bd25c001c055b0a",
                "companyId": "6355a2d93971c7001cb6db09",
                "employeeId": "6357f5a4ed4142001cda8b41",
                "documentTitle": "jfgckhg",
                "documentUrl": "",
                "createdAt": "1667559419135",
                "updatedAt": "1667559419135",
                "__typename": "UserDocument"
            }
        ],
        "companyAsset": [
            {
                "_id": "6364f037473c98001cc05ae3",
                "assetName": "Mac Book",
                "description": "exjytvjh,",
                "dateReceived": "2022-11-27",
                "imageLink": "",
                "serialNumber": "32435678",
                "tagNumber": "YIH-1",
                "__typename": "CompanyAsset"
            }
        ],
        "prorate": [],
        "health": {
            "bloodGroup": "A",
            "genotype": "AA",
            "disabilities": "None",
            "healthHistory": "fafadf",
            "__typename": "Health"
        },
        "family": {
            "maritalStatus": "SINGLE",
            "nextOfKin": {
                "name": "Brass Books",
                "relationship": "Sister",
                "address": "278 Melford Okilo Road, Saptex Junction, Yenizue-Epie, Yenagoa, Bayelsa State, Nigeria.",
                "phoneNumbers": [
                    "08108139758"
                ],
                "email": "info@brassandbooks.com",
                "dob": null,
                "__typename": "nextOfKinType"
            },
            "__typename": "FamilyType"
        },
        "jobHistory": [
            {
                "_id": "63663428e32540001c70936c",
                "companyName": "Gofer",
                "jobTitle": "adad",
                "startDate": "2022-11-05",
                "endDate": "2022-11-05",
                "description": "adad",
                "__typename": "JobHistory"
            }
        ],
        "reportTo": {
            "_id": "6357f5a4ed4142001cda8b3d",
            "companyId": "6355a2d93971c7001cb6db09",
            "lastLogin": null,
            "createdAt": "2022-10-25T14:41:40.757Z",
            "updatedAt": "2022-12-22T13:23:34.589Z",
            "__typename": "Employee"
        },
        "education": {
            "history": [
                {
                    "_id": "6364ee6b4bd25c001c055afe",
                    "institutionName": "Niger Delta University",
                    "degree": "BSc",
                    "courseOfStudy": "Computer Science",
                    "grade": "First Class Upper",
                    "graduationYear": "2022",
                    "description": "gckgcvkhjg",
                    "imageLink": "",
                    "__typename": "EducationHistory"
                }
            ],
            "awards": [
                {
                    "_id": "6364ecae473c98001cc05aa8",
                    "awardReceived": "adada",
                    "awardingOrganisation": "Gofer",
                    "dateObtained": "2022-11-05",
                    "imageLink": "",
                    "__typename": "Award"
                }
            ],
            "certificates": [
                {
                    "_id": "6364ea83fac936001cd384a9",
                    "title": "12",
                    "awardingInstitution": "Niger Delta University",
                    "dateObtained": "2022-11-04",
                    "expiryDate": "2022-11-04",
                    "imageLink": "https://instagram.com/athen.donald",
                    "__typename": "EducationCertificate"
                }
            ],
            "__typename": "Education"
        },
        "createdAt": "2022-10-25T14:41:40.835Z",
        "updatedAt": "2023-03-15T20:40:00.134Z",
        "__typename": "Employee"
    },
    {
        "_id": "6355a3bd522f54001c524371",
        "companyId": "6355a2d93971c7001cb6db09",
        "company": null,
        "profile": {
            "status": null,
            "password": null,
            "accountType": null,
            "firstName": "Peter",
            "lastName": "Whyte",
            "middleName": "",
            "email": "peteremmanuelwhyte@gmail.com",
            "phone": "2348108139758",
            "address": "Opposite Royal FM Road, Agudama-Epie, Yenagoa, Bayelsa State",
            "country": "",
            "dob": "2022-06-08",
            "pfp": null,
            "state": "Bayelsa",
            "gender": "OTHER",
            "title": null,
            "otherPhoneNumbers": [
                "2348108139759"
            ],
            "relationshipStatus": null,
            "picture": null,
            "ISO2": null,
            "birthday": null,
            "religion": null,
            "personalEmail": null,
            "nin": "",
            "taxId": "",
            "__typename": "EmployeeProfile"
        },
        "job": {
            "departmentId": "64122d2053b0a7001ccebab5",
            "staffLevelId": "6355a3bd522f54001c524369",
            "jobTitle": "Senior Front End Engineer",
            "teamId": "",
            "userName": "EWFQER",
            "branchId": "63c9baffd9fe4e001cd9e534",
            "employmentType": "FULLTIME",
            "reportTo": null,
            "hireDateString": "",
            "__typename": "EmployeeJob"
        },
        "emergency": [],
        "payment": {
            "bankName": "Access Bank",
            "accountName": "emmanuel whyte peter",
            "accountNumber": "0805915974",
            "accountResolved": true,
            "bankCode": "044",
            "monthlySalary": null,
            "recipientCode": "",
            "bankAccountType": "Not_Sure",
            "__typename": "EmployeePaymentDetails"
        },
        "lastLogin": null,
        "staffLevel": {
            "_id": "6355a3bd522f54001c524369",
            "creatorId": "6355a2d93971c7001cb6db09",
            "companyId": "6355a2d93971c7001cb6db09",
            "title": "emmanuel whyte peter #c3abe9ee96e880ec",
            "usePercentageForAllowance": true,
            "grossAmount": 300000,
            "netAmount": 290500,
            "allowanceDetails": [
                {
                    "_id": "6355a3bd522f54001c52436a",
                    "allowanceId": "6355a2d93971c7001cb6db0b",
                    "percentage": 25,
                    "amount": null,
                    "__typename": "AllowanceDetails"
                },
                {
                    "_id": "6355a3bd522f54001c52436b",
                    "allowanceId": "6355a2d93971c7001cb6db0c",
                    "percentage": 10,
                    "amount": null,
                    "__typename": "AllowanceDetails"
                },
                {
                    "_id": "6355a3bd522f54001c52436c",
                    "allowanceId": "6355a2d93971c7001cb6db0d",
                    "percentage": 40,
                    "amount": null,
                    "__typename": "AllowanceDetails"
                },
                {
                    "_id": "6355a3bd522f54001c52436d",
                    "allowanceId": "6355a342d11e0f001cc78d25",
                    "percentage": 25,
                    "amount": null,
                    "__typename": "AllowanceDetails"
                }
            ],
            "additionalAllowanceDetails": [],
            "nhf": {
                "amount": 7500,
                "__typename": "nhfType"
            },
            "pension": {
                "amount": 3000,
                "provider": "AIICO Pension Managers Limited",
                "providerPin": "",
                "employerPensionContribution": 0,
                "usePercentage": false,
                "employeePensionPin": "12345",
                "__typename": "pensionType"
            },
            "itf": {
                "amount": 7500,
                "__typename": "itfType"
            },
            "nsitf": {
                "amount": 3000,
                "__typename": "nsitfType"
            },
            "paye": {
                "amount": 7500,
                "stateForPaye": "",
                "taxId": "",
                "__typename": "payeType"
            },
            "wht": null,
            "lifeInsurance": {
                "provider": "Alliance & General Insurance Plc",
                "amount": 2600,
                "duration": "MONTHLY",
                "__typename": "lifeInsuranceType"
            },
            "lifeAssurance": {
                "provider": "AIICO Insurance Plc",
                "amount": 7500,
                "duration": "MONTHLY",
                "__typename": "lifeAssuranceType"
            },
            "hmo": {
                "provider": "Reliance HMO Limited",
                "amount": 2000,
                "duration": "MONTHLY",
                "plan": "BRONZE",
                "__typename": "hmoType"
            },
            "gratuity": {
                "salaryAmount": 1000,
                "yearsWorked": 10,
                "amount": 10000,
                "__typename": "gratuityType"
            },
            "benefits": [
                "Pension",
                "PAYE",
                "HMO",
                "Group_Life_Insurance",
                "Employee_Life_Assurance",
                "NSITF",
                "ITF",
                "NHF"
            ],
            "businessExpense": {
                "amount": 2500,
                "expenseName": "Wawu",
                "__typename": "businessExpenseType"
            },
            "withholdingTax": false,
            "manually_inputted": false,
            "createdAt": "2022-10-23T20:27:41.349Z",
            "updatedAt": "2022-10-26T00:25:34.556Z",
            "__typename": "StaffLevel"
        },
        "branch": {
            "_id": "63c9baffd9fe4e001cd9e534",
            "creatorId": "63b8466cbbb150001c11edf3",
            "companyId": "6355a2d93971c7001cb6db09",
            "name": "bayelsa branch",
            "address": "Nigeria",
            "createdAt": "2023-01-19T21:49:51.943Z",
            "updatedAt": "2023-01-19T21:49:51.943Z",
            "__typename": "Branch"
        },
        "department": {
            "_id": "64122d2053b0a7001ccebab5",
            "name": "department",
            "creatorId": "63b8466cbbb150001c11edf3",
            "companyId": "6355a2d93971c7001cb6db09",
            "departmentHead": null,
            "createdAt": "2023-03-15T20:40:00.004Z",
            "updatedAt": "2023-03-15T20:40:00.004Z",
            "__typename": "DepartmentV3"
        },
        "userDocuments": [],
        "companyAsset": [],
        "prorate": [
            {
                "_id": "6355a3bd522f54001c524377",
                "employeeId": "6355a3bd522f54001c524371",
                "month": 0,
                "year": 0,
                "days": 0,
                "workingDaysPerWeek": 31,
                "dailySalary": 9370.9677419355,
                "proratedSalary": 0,
                "companyId": "6355a2d93971c7001cb6db09",
                "deleted": false,
                "__typename": "Prorate"
            }
        ],
        "health": {
            "bloodGroup": "",
            "genotype": "",
            "disabilities": "",
            "healthHistory": "",
            "__typename": "Health"
        },
        "family": {
            "maritalStatus": null,
            "nextOfKin": {
                "name": "",
                "relationship": "",
                "address": "",
                "phoneNumbers": [],
                "email": "",
                "dob": null,
                "__typename": "nextOfKinType"
            },
            "__typename": "FamilyType"
        },
        "jobHistory": [],
        "reportTo": null,
        "education": {
            "history": [
                {
                    "_id": "6357dc475e0084001cff35cc",
                    "institutionName": "Niger Delta University",
                    "degree": "BSc",
                    "courseOfStudy": "Computer Science",
                    "grade": "First Class Upper",
                    "graduationYear": "2022",
                    "description": "I done sign out",
                    "imageLink": "",
                    "__typename": "EducationHistory"
                },
                {
                    "_id": "6357df985d07b9001c872587",
                    "institutionName": "University Of Port Harcourt",
                    "degree": "PHD",
                    "courseOfStudy": "Business Administration",
                    "grade": "First Class Upper",
                    "graduationYear": "2022",
                    "description": "I be PHD holder",
                    "imageLink": "",
                    "__typename": "EducationHistory"
                }
            ],
            "awards": [],
            "certificates": [],
            "__typename": "Education"
        },
        "createdAt": "2022-10-23T20:27:41.406Z",
        "updatedAt": "2023-03-15T20:40:00.134Z",
        "__typename": "Employee"
    },
    {
        "_id": "641250e64dc511001c1546e1",
        "companyId": "6355a2d93971c7001cb6db09",
        "company": null,
        "profile": {
            "status": "ACTIVE",
            "password": null,
            "accountType": null,
            "firstName": "Queeneth",
            "lastName": "Wilber",
            "middleName": "",
            "email": null,
            "phone": "2348059159742",
            "address": "",
            "country": "",
            "dob": "",
            "pfp": "",
            "state": "",
            "gender": "FEMALE",
            "title": "Miss",
            "otherPhoneNumbers": [],
            "relationshipStatus": null,
            "picture": null,
            "ISO2": null,
            "birthday": null,
            "religion": "",
            "personalEmail": "",
            "nin": "",
            "taxId": "",
            "__typename": "EmployeeProfile"
        },
        "job": {
            "departmentId": "63c9be4262b118001c7ff6a0",
            "staffLevelId": "641250e64dc511001c1546de",
            "jobTitle": "Media Personel",
            "teamId": "",
            "userName": "Whyt-47338",
            "branchId": "",
            "employmentType": "FULLTIME",
            "reportTo": null,
            "hireDateString": "",
            "__typename": "EmployeeJob"
        },
        "emergency": [],
        "payment": {
            "bankName": "Access Bank",
            "accountName": "emmanuel whyte peter",
            "accountNumber": "0805915974",
            "accountResolved": true,
            "bankCode": "044",
            "monthlySalary": null,
            "recipientCode": "",
            "bankAccountType": "Not_Sure",
            "__typename": "EmployeePaymentDetails"
        },
        "lastLogin": null,
        "staffLevel": {
            "_id": "641250e64dc511001c1546de",
            "creatorId": "63b8466cbbb150001c11edf3",
            "companyId": "6355a2d93971c7001cb6db09",
            "title": "emmanuel whyte peter #d761ecdde4898123",
            "usePercentageForAllowance": true,
            "grossAmount": 600000,
            "netAmount": 600000,
            "allowanceDetails": [
                {
                    "_id": "641250e64dc511001c1546df",
                    "allowanceId": "6355a2d93971c7001cb6db0b",
                    "percentage": 100,
                    "amount": null,
                    "__typename": "AllowanceDetails"
                }
            ],
            "additionalAllowanceDetails": [],
            "nhf": {
                "amount": 0,
                "__typename": "nhfType"
            },
            "pension": {
                "amount": 0,
                "provider": "",
                "providerPin": "",
                "employerPensionContribution": 0,
                "usePercentage": false,
                "employeePensionPin": "",
                "__typename": "pensionType"
            },
            "itf": {
                "amount": 0,
                "__typename": "itfType"
            },
            "nsitf": {
                "amount": 0,
                "__typename": "nsitfType"
            },
            "paye": {
                "amount": 0,
                "stateForPaye": "",
                "taxId": "",
                "__typename": "payeType"
            },
            "wht": {
                "amount": 0,
                "percentage": 0,
                "paymentTypes": [],
                "__typename": "whtType"
            },
            "lifeInsurance": {
                "provider": "",
                "amount": 0,
                "duration": "MONTHLY",
                "__typename": "lifeInsuranceType"
            },
            "lifeAssurance": {
                "provider": "",
                "amount": 0,
                "duration": "MONTHLY",
                "__typename": "lifeAssuranceType"
            },
            "hmo": {
                "provider": "",
                "amount": 0,
                "duration": "MONTHLY",
                "plan": "GOLD",
                "__typename": "hmoType"
            },
            "gratuity": {
                "salaryAmount": 0,
                "yearsWorked": 0,
                "amount": 0,
                "__typename": "gratuityType"
            },
            "benefits": [],
            "businessExpense": {
                "amount": 0,
                "expenseName": "",
                "__typename": "businessExpenseType"
            },
            "withholdingTax": false,
            "manually_inputted": false,
            "createdAt": "2023-03-15T23:12:38.901Z",
            "updatedAt": "2023-03-15T23:12:38.901Z",
            "__typename": "StaffLevel"
        },
        "branch": null,
        "department": {
            "_id": "63c9be4262b118001c7ff6a0",
            "name": "product design",
            "creatorId": "63b8466cbbb150001c11edf3",
            "companyId": "6355a2d93971c7001cb6db09",
            "departmentHead": "6371632e69e08f001c41a858",
            "createdAt": "2023-01-19T22:03:46.047Z",
            "updatedAt": "2023-02-09T22:04:09.442Z",
            "__typename": "DepartmentV3"
        },
        "userDocuments": [],
        "companyAsset": [],
        "prorate": [],
        "health": {
            "bloodGroup": "",
            "genotype": "",
            "disabilities": "",
            "healthHistory": "",
            "__typename": "Health"
        },
        "family": {
            "maritalStatus": null,
            "nextOfKin": {
                "name": "",
                "relationship": "",
                "address": "",
                "phoneNumbers": [],
                "email": "",
                "dob": "",
                "__typename": "nextOfKinType"
            },
            "__typename": "FamilyType"
        },
        "jobHistory": [],
        "reportTo": null,
        "education": {
            "history": [],
            "awards": [],
            "certificates": [],
            "__typename": "Education"
        },
        "createdAt": "2023-03-15T23:12:38.930Z",
        "updatedAt": "2023-03-15T23:12:38.930Z",
        "__typename": "Employee"
    },
    {
        "_id": "640623ef40bc71001ccd6328",
        "companyId": "6355a2d93971c7001cb6db09",
        "company": null,
        "profile": {
            "status": "ACTIVE",
            "password": null,
            "accountType": null,
            "firstName": "emmanuel",
            "lastName": "peter",
            "middleName": "",
            "email": null,
            "phone": "",
            "address": "",
            "country": "",
            "dob": "",
            "pfp": "",
            "state": "",
            "gender": "MALE",
            "title": "Mr",
            "otherPhoneNumbers": [],
            "relationshipStatus": null,
            "picture": null,
            "ISO2": null,
            "birthday": null,
            "religion": "",
            "personalEmail": "",
            "nin": "",
            "taxId": "",
            "__typename": "EmployeeProfile"
        },
        "job": {
            "departmentId": "64122b2d75b5d6001c8a99bd",
            "staffLevelId": "640623ef40bc71001ccd6325",
            "jobTitle": "Product Designer",
            "teamId": "",
            "userName": "Whyt-95314",
            "branchId": "",
            "employmentType": "FULLTIME",
            "reportTo": null,
            "hireDateString": "",
            "__typename": "EmployeeJob"
        },
        "emergency": [],
        "payment": {
            "bankName": "Access Bank",
            "accountName": "emmanuel whyte peter",
            "accountNumber": "0805915974",
            "accountResolved": true,
            "bankCode": "044",
            "monthlySalary": null,
            "recipientCode": "",
            "bankAccountType": "Not_Sure",
            "__typename": "EmployeePaymentDetails"
        },
        "lastLogin": null,
        "staffLevel": {
            "_id": "640623ef40bc71001ccd6325",
            "creatorId": "63b8466cbbb150001c11edf3",
            "companyId": "6355a2d93971c7001cb6db09",
            "title": "emmanuel whyte peter #c1275d892208d363",
            "usePercentageForAllowance": true,
            "grossAmount": 1000000,
            "netAmount": 1000000,
            "allowanceDetails": [
                {
                    "_id": "640623ef40bc71001ccd6326",
                    "allowanceId": "6355a2d93971c7001cb6db0b",
                    "percentage": 100,
                    "amount": null,
                    "__typename": "AllowanceDetails"
                }
            ],
            "additionalAllowanceDetails": [],
            "nhf": {
                "amount": 0,
                "__typename": "nhfType"
            },
            "pension": {
                "amount": 0,
                "provider": "",
                "providerPin": "",
                "employerPensionContribution": 0,
                "usePercentage": false,
                "employeePensionPin": "",
                "__typename": "pensionType"
            },
            "itf": {
                "amount": 0,
                "__typename": "itfType"
            },
            "nsitf": {
                "amount": 0,
                "__typename": "nsitfType"
            },
            "paye": {
                "amount": 0,
                "stateForPaye": "",
                "taxId": "",
                "__typename": "payeType"
            },
            "wht": {
                "amount": 0,
                "percentage": 0,
                "paymentTypes": [],
                "__typename": "whtType"
            },
            "lifeInsurance": {
                "provider": "",
                "amount": 0,
                "duration": "MONTHLY",
                "__typename": "lifeInsuranceType"
            },
            "lifeAssurance": {
                "provider": "",
                "amount": 0,
                "duration": "MONTHLY",
                "__typename": "lifeAssuranceType"
            },
            "hmo": {
                "provider": "",
                "amount": 0,
                "duration": "MONTHLY",
                "plan": "GOLD",
                "__typename": "hmoType"
            },
            "gratuity": {
                "salaryAmount": 0,
                "yearsWorked": 0,
                "amount": 0,
                "__typename": "gratuityType"
            },
            "benefits": [],
            "businessExpense": {
                "amount": 0,
                "expenseName": "",
                "__typename": "businessExpenseType"
            },
            "withholdingTax": false,
            "manually_inputted": false,
            "createdAt": "2023-03-06T17:33:35.850Z",
            "updatedAt": "2023-03-06T17:33:35.850Z",
            "__typename": "StaffLevel"
        },
        "branch": null,
        "department": {
            "_id": "64122b2d75b5d6001c8a99bd",
            "name": "be devs",
            "creatorId": "63b8466cbbb150001c11edf3",
            "companyId": "6355a2d93971c7001cb6db09",
            "departmentHead": null,
            "createdAt": "2023-03-15T20:31:41.315Z",
            "updatedAt": "2023-03-15T20:31:41.315Z",
            "__typename": "DepartmentV3"
        },
        "userDocuments": [],
        "companyAsset": [],
        "prorate": [],
        "health": {
            "bloodGroup": "",
            "genotype": "",
            "disabilities": "",
            "healthHistory": "",
            "__typename": "Health"
        },
        "family": {
            "maritalStatus": null,
            "nextOfKin": {
                "name": "",
                "relationship": "",
                "address": "",
                "phoneNumbers": [],
                "email": "",
                "dob": "",
                "__typename": "nextOfKinType"
            },
            "__typename": "FamilyType"
        },
        "jobHistory": [],
        "reportTo": null,
        "education": {
            "history": [],
            "awards": [],
            "certificates": [],
            "__typename": "Education"
        },
        "createdAt": "2023-03-06T17:33:35.868Z",
        "updatedAt": "2023-03-15T20:31:41.438Z",
        "__typename": "Employee"
    }
]

export default employees