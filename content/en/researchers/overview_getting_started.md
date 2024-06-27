+++
title = 'Overview of steps to initiate data analysis'
menu = 'researchers_menu'
layout = 'page'
+++
Last update: 31-05-2024

# Overview of steps to initiate data analysis
To use the ELAN infrastructure and its data, you will need to take the steps shown in the flow chart below.
Some of the providers of our data, and for certain types of research, some additional steps need to be taken. These are displayed in the flow chart by selecting the following buttons if they are applicable to your situation.

{{< processselection class="content-gallery" >}}
    {{< processselectionoption value="mentalhealth" text="I want to use mental health data." >}}
    {{< processselectionoption value="hospital" text="I want to use hospital data." >}}
{{< /processselection >}}

The purple boxes are links to additional information or to platforms that allow you to perform the action in question.

You may have already finished writing your research protocol, in which case you can submit that to your ELAN ticket.

**Note that you need to follow *all* paths coming from each box**

{{ < comment >}}
Moeten we Perined + GGD + gemeente Den Haag + Hadoks ook toevoegen aan de Flowchart? Volgens Franks Guidance Doc moeten onderzoekers ook van die instanties expliciet toestemming vragen als ze die data willen gebruiken. Of vallen die mailtjes onder "Contact ELAN-DCC to start set-up of your research data"?
{{ < /comment >}}

```mermaid {class=""}
flowchart TD
    id1("(Write research protocol)") --> id2(Submit one ELAN ticket\nper research/article)
    subgraph ticket [This process will take at least 2 months]
        id4
    end
    id4(Process feedback, 
    changes in protocol and 
    ticket text when needed,
    and await approval
    from ELAN research team) --> id5
    id5(Submit final protocol
    to the
    science committee) -->|About 1 month| id6
    id6(Await approval,
    and process feedback
    if applicable from
    ELAN research committee) --> id7
    id7(submit documents 
    to nWMO committee) -->|1 to 2 months| id9
    id9(Await approval) --> id10
    id10(Upload approval
    to ticket) --> idend(Start your data-analysis!)
    id6 --> id8
    id8("Contact ELAN-DCC
    to start 
    set-up of your 
    research data
    (including the Data
    Management Plan):
    elan.dcc@lumc.nl") --> id11(Start process of
    gaining access
    to CBS or LUMC directories)

    id2 --> ticket

    style idend fill:#86c985,stroke:#4d934c,stroke-width:4px
    style id2 fill:#c594c3
    style id5 fill:#c594c3
    style id7 fill:#c594c3
    style id10 fill:#c594c3

    style ticket fill:#efd5ef, stroke:#a57ca5
    
    click id2 "https://elanresearch.nl" "ELAN research" _blank
    click id5 "../sciencecommittee" "Science committee"
    click id7 "https://www.metc-ldd.nl/toetsingsprocedures/niet-wmo-en-niet-mdr" "nWMO committee" _blank
```

```mermaid {class="mentalhealth"}
flowchart TD
    id1("(Write research protocol)") --> id2(Submit one ELAN ticket\nper research/article)
    subgraph ticket [This process will take at least 2 months]
        id4
    end
    id4(Process feedback, 
    changes in protocol and 
    ticket text when needed,
    and await approval
    from ELAN research team) --> id5
    id5(Submit final protocol
    to the
    science committee) -->|About 1 month| id6
    id6(Await approval,
    and process feedback
    if applicable from
    ELAN research committee) --> id7
    id7(submit documents 
    to nWMO committee) -->|1 to 2 months| id9
    id9(Await approval) --> id10
    id10(Upload approval
    to ticket) --> idend(Start your data-analysis!)
    id6 --> id8
    id8("Contact ELAN-DCC
    to start 
    set-up of your 
    research data
    (including the Data
    Management Plan):
    elan.dcc@lumc.nl") --> id11(Start process of
    gaining access
    to CBS or LUMC directories)

    subgraph external [These actions can be performed whenever]
        idB1(Request permission
        from Parnassia) --> idB2(Upload approval
        from Parnassia
        to ticket)
    end

    id2 --> external
    id2 --> ticket

    style idend fill:#86c985,stroke:#4d934c,stroke-width:4px
    style id2 fill:#c594c3
    style id5 fill:#c594c3
    style id7 fill:#c594c3
    style id10 fill:#c594c3
    style idB2 fill:#c594c3
    style external fill:#efd5ef, stroke:#a57ca5
    style ticket fill:#efd5ef, stroke:#a57ca5
    
    click id2 "https://elanresearch.nl" "ELAN research" _blank
    click id10 "https://elanresearch.nl" "ELAN research" _blank
    click idB2 "https://elanresearch.nl" "ELAN research" _blank
    click id5 "../sciencecommittee" "Science committee"
    click id7 "https://www.metc-ldd.nl/toetsingsprocedures/niet-wmo-en-niet-mdr" "nWMO committee" _blank
```

```mermaid {class="hospital"}
flowchart TD
    id1("(Write research protocol)") --> id2(Submit one ELAN ticket\nper research/article)
    subgraph ticket [This process will take at least 2 months]
        id4
    end
    id4(Process feedback, 
    changes in protocol and 
    ticket text when needed,
    and await approval
    from ELAN research team) --> id5
    id5(Submit final protocol
    to the
    science committee) -->|About 1 month| id6
    id6(Await approval,
    and process feedback
    if applicable from
    ELAN research committee) --> id7
    id7(submit documents 
    to nWMO committee) -->|1 to 2 months| id9
    id9(Await approval) --> id10
    id10(Upload approval
    to ticket) --> idend(Start your data-analysis!)
    id6 --> id8
    id8("Contact ELAN-DCC
    to start 
    set-up of your 
    research data
    (including the Data
    Management Plan):
    elan.dcc@lumc.nl") --> id11(Start process of
    gaining access
    to CBS or LUMC directories)

    subgraph external [These actions can be performed whenever]

        idC1("Initiate research
        at hospital(s)")
    end

    id2 --> external
    id2 --> ticket

    style idend fill:#86c985,stroke:#4d934c,stroke-width:4px
    style id2 fill:#c594c3
    style id5 fill:#c594c3
    style id7 fill:#c594c3
    style id10 fill:#c594c3
    style idC1 fill:#c594c3
    style external fill:#efd5ef, stroke:#a57ca5
    style ticket fill:#efd5ef, stroke:#a57ca5
    
    click id2 "https://elanresearch.nl" "ELAN research" _blank
    click id10 "https://elanresearch.nl" "ELAN research" _blank
    click id5 "../sciencecommittee" "Science committee"
    click id7 "https://www.metc-ldd.nl/toetsingsprocedures/niet-wmo-en-niet-mdr" "nWMO committee" _blank
    click idC1 "../researchhospital" "Research at a hospital"
```


```mermaid {class="hospital mentalhealth"}
flowchart TD
    id1("(Write research protocol)") --> id2(Submit one ELAN ticket\nper research/article)
    subgraph ticket [This process will take at least 2 months]
        id4
    end
    id4(Process feedback, 
    changes in protocol and 
    ticket text when needed,
    and await approval
    from ELAN research team) --> id5
    id5(Submit final protocol
    to the
    science committee) -->|About 1 month| id6
    id6(Await approval,
    and process feedback
    if applicable from
    ELAN research committee) --> id7
    id7(submit documents 
    to nWMO committee) -->|1 to 2 months| id9
    id9(Await approval) --> id10
    id10(Upload approval
    to ticket) --> idend(Start your data-analysis!)
    id6 --> id8
    id8("Contact ELAN-DCC
    to start 
    set-up of your 
    research data
    (including the Data
    Management Plan):
    elan.dcc@lumc.nl") --> id11(Start process of
    gaining access
    to CBS or LUMC directories)

    subgraph external [These actions can be performed whenever]
        idB1(Request permission
        from Parnassia) --> idB2(Upload approval
        from Parnassia
        to ticket)

        idC1("Initiate research
        at hospital(s)")
    end

    id2 --> external
    id2 --> ticket

    style idend fill:#86c985,stroke:#4d934c,stroke-width:4px
    style id2 fill:#c594c3
    style id5 fill:#c594c3
    style id7 fill:#c594c3
    style id10 fill:#c594c3
    style idB2 fill:#c594c3
    style idC1 fill:#c594c3
    style external fill:#efd5ef, stroke:#a57ca5
    style ticket fill:#efd5ef, stroke:#a57ca5
    
    click id2 "https://elanresearch.nl" "ELAN research" _blank
    click id10 "https://elanresearch.nl" "ELAN research" _blank
    click idB2 "https://elanresearch.nl" "ELAN research" _blank
    click id5 "../sciencecommittee" "Science committee"
    click id7 "https://www.metc-ldd.nl/toetsingsprocedures/niet-wmo-en-niet-mdr" "nWMO committee" _blank
    click idC1 "../researchhospital" "Research at a hospital"
```