---
layout: page
permalink: /project/
title: Project
description: The SENCY project in a glance
nav: true

logo_1: larsys.png
logo_2: inesc_id_logo.png
logo_3: fct_logo.png
logo_4: eu_logo_erdf.png
logo_mit: mit_logo.png
logo_ufjf: ufjf_logo.png
---

<div class='specialParagraph' markdown='1'>

The SENCY project aims to collect detailed data on electricity and water consumption from five industrial kitchens (IKs) in Lisbon operating under real conditions. This dataset will include a variety of restaurant types, from traditional fixed-menu establishments to à la carte restaurants and snack bars, providing a longer and more diverse sample than previous projects to better generalize research findings. To complement this, SENCY will conduct a comprehensive phone survey with at least 250 restaurants across Portugal, gathering in-depth information on aspects such as cuisine type, kitchen size and structure, energy reliance, renewable energy availability, and operational costs. This survey reflects the significant changes the sector has undergone in recent years.

Using this rich data, SENCY will apply advanced machine learning and data science techniques to extract valuable insights. The project focuses on modeling appliance interactions through data-driven system dynamics, employing federated learning to enable privacy-preserving forecasting, and utilizing feature extraction and transfer learning for detailed disaggregation of energy and water consumption. Furthermore, SENCY seeks to explore how industrial kitchens can support increased integration of renewable energy sources by leveraging their operational flexibility. To this end, the project will develop and test control strategies that aggregate flexibility across appliances, enabling participation in day-ahead and real-time electricity markets—an area that remains largely unexplored in this energy-intensive sector.

Finally, SENCY places strong emphasis on engaging with key industrial kitchen stakeholders to understand their perceptions, motivations, and concerns regarding the adoption of distributed energy resources (DERs) and participation in electricity markets. The project will also involve end-users in testing prototype solutions, allowing them to simulate participation in energy efficiency initiatives and market mechanisms, ensuring that the developed technologies align with user needs and promote successful real-world adoption.

## Tasks

The SENCY project will run for 36 months, between August 2025 and July 2028. The proposed research plan consists of **six tasks**. T1: User-Centered Research, T2: Data-driven Modeling and Forecasting, T3: Energy Efficiency, Flexibility and DER Integration, T4: Real-world Deployment, T5: Communicationd and Dissemination, and T6: Project Management.

 - **Task 1: User-Centered Research** will focus on understanding the Portuguese industrial kitchen (IK) sector through a detailed phone survey targeting at least 250 restaurants. It will explore their organization, operations, and energy-efficiency challenges. In-depth studies of daily operations will be conducted in a diverse sample of restaurants using service design methods and direct observations. This task will also develop and test user interfaces to effectively communicate eco-feedback, engaging stakeholders through participatory design and prototype evaluations to ensure usability and sustained engagement.

- **Task 2: Data-Driven Modelling and Forecasting** will develop advanced data science methods to model appliance interactions, create data-driven appliance models, and build detailed digital twins of industrial kitchens. Realistic simulation environments will be created, demand forecasting models will be built using privacy-preserving federated learning, and consumption data will be disaggregated to reduce reliance on physical sensors by applying transfer learning and combining water and electricity data streams for improved accuracy.

- **Task 3: Assessing Energy Efficiency, Demand Flexibility, and DER Integration** will investigate opportunities to improve energy efficiency by optimizing cooking processes and reducing demand peaks. Algorithms will be developed to identify and forecast appliance flexibility potential, alongside control strategies for real-time and day-ahead participation in energy markets. The task will assess the integration of distributed energy resources (DERs) such as solar PV and battery storage, and demonstration applications will be deployed and tested in participating kitchens.

- **Task 4: Real-world Deployment** will involve recruiting and characterizing five industrial kitchens for long-term data collection. Sensing infrastructure will be upgraded and installed by professionals, ensuring safety and compliance. Data quality will be continuously monitored throughout the deployment. User studies will be conducted on-site to evaluate the developed tools and solutions within real operational environments, focusing on usability, energy efficiency strategies, and market participation.

- **Task 5: Communication and Dissemination** will plan and implement activities to maximize the project’s visibility and impact. This will include creating a strong visual identity and online presence, producing promotional materials and videos, publishing open-access scientific articles, participating in and organizing conferences and workshops, and hosting a final event to share results with stakeholders. The task will also contribute to coordinated dissemination efforts aligned with national and European initiatives.

- **Task 6: Project Management** will ensure the project’s smooth implementation through financial, administrative, and governance activities. It will manage progress reporting, organize meetings, maintain communication platforms, and liaise with funders and stakeholders. A Data and Code Management Plan adhering to FAIR principles will be established, open repositories will be maintained, and rigorous quality assurance and risk management processes—including peer reviews and regular progress assessments—will be implemented.

</div>

## Partners

<div class="clearfix" style="margin-bottom:10px">
<div class="float-left" style="width:30%">
    {% if page.logo_1 %}
      {% responsive_image_block %}
        path: {{ page.logo_1 | prepend: 'assets/img/' }}
        //class: "img-fluid z-depth-1 rounded"
        style: "width:100%"
        alt: {{ page.profile.image }}
      {% endresponsive_image_block %}
    {% endif %}
</div>

<div class="float-left" style="width:70%; padding-left:10px" markdown="1">

The Associate Laboratory of Robotics and Engineering Systems ([LARSyS](https://larsys.pt)) was founded in 2001 to conduct basic and applied research in engineering technologies relevant to industrial applications and societal challenges. The Interactive Technologies Institute ([ITI](https://iti.larsys.pt)) is the LARSyS research unit responsihle for the SENCY project.

</div>
</div>

<div class="clearfix" style="margin-bottom:10px;">

<div class="float-left" style="width:30%;">
      {% if page.logo_2 %}
        {% responsive_image_block %}
          path: {{ page.logo_2 | prepend: 'assets/img/' }}
          //class: "img-fluid z-depth-1 rounded"
          style: "width:100%;"
          alt: {{ page.profile.image }}
        {% endresponsive_image_block %}
      {% endif %}
</div>

<div class="float-left" style="width:70%; padding-left:10px;" markdown="1">

The Instituto de Engenharia de Sistemas e Computadores, Investigação e Desenvolvimento em Lisboa ([INESC-ID](https://inesc-id.pt)), is a non-profit research institution, privately owned by IST and INESC, officially declared of public interest, created as a result of a reorganization of its parent institution INESC. The Sustainable Power Systems ([SPS](https://iti.larsys.pt)) is the INESC-ID scientific area where the SENCY project will run.

</div>
</div>

<div class="clearfix" style="margin-bottom:10px;">

<div class="float-left" style="width:30%;">
      {% if page.logo_ufjf %}
        {% responsive_image_block %}
          path: {{ page.logo_ufjf | prepend: 'assets/img/' }}
          //class: "img-fluid z-depth-1 rounded"
          style: "width:100%;"
          alt: {{ page.profile.image }}
        {% endresponsive_image_block %}
      {% endif %}
</div>


<div class="float-left" style="width:70%; padding-left:10px;" markdown="1">

The Universidade Federal de Juiz de Fora (UFJF) in Juiz de Fora, Minas Gerais, Brazil, is renowned for academic excellence and community engagement since its establishment in 1960. <!--Offering diverse undergraduate and graduate programs, UFJF fosters innovation and social responsibility, making a significant impact locally and globally through collaborative research and education.-->

</div>
</div>

## Funding

<div style="width:100%;"  markdown="1">
  The SENCY project is co-funded by the European Regional Development Fund (ERDF) and by FCT through national funds.
</div>

<div markdown="1">
  <div style="width:100%;text-align: center;">
        {% if page.logo_3 %}
          {% responsive_image_block %}
            path: {{ page.logo_3 | prepend: 'assets/img/' }}
            //class: "img-fluid z-depth-1 rounded"
            style: "width:30%"
            alt: {{ page.profile.image }}
          {% endresponsive_image_block %}
        {% endif %}
        
          {% if page.logo_4 %}
          {% responsive_image_block %}
            path: {{ page.logo_4 | prepend: 'assets/img/' }}
            //class: "img-fluid z-depth-1 rounded"
            style: "width:30%"
            alt: {{ page.profile.image }}
          {% endresponsive_image_block %}
        {% endif %}
  </div>
  
</div>



