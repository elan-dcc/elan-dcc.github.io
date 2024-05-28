+++
title = 'Overview of steps to initiate data analysis'
menu = 'researchers_menu'
layout = 'page'
+++
Last update: 28-05-2024

Clicking on the purple portals will direct you to the right destination to perform the action in question.

{{< processselection class="content-gallery" >}}
    {{< processselectionoption value="mentalhealth" text="I want to use mental health data." >}}
    {{< processselectionoption value="hospital" text="I want to use hospital data." >}}
{{< /processselection >}}


```mermaid {class=""}
flowchart TD
    id1(Write research protocol) --> id2
    id2(Create ELAN ticket) --> id3
    id3(Send ticket to 
    ELAN research team:
    elan@lumc.nl) <-->|at least 2 months| id4
    id4(Process feedback and
    await approval
    from ELAN research team) --> id5
    id5(Submit final protocol
    to the
    science committee) -->|About 1 month| id6
    id6(Await approval by
    ELAN research team and science committee) --> id7
    id7(submit documents 
    to nWMO committee) -->|1 to 2 months| id9
    id9(Await approval) --> id10
    id10(Upload approval
    to ticket) --> idend(Start your data-analysis!)
    id6(Await approval from
    ELAN research committee) --> id8(Contact ELAN-DCC
    to start 
    set-up:
    elan.dcc@lumc.nl)

    style idend fill:#86c985,stroke:#4d934c,stroke-width:4px
    style id2 fill:#c594c3
    style id5 fill:#c594c3
    style id7 fill:#c594c3
    style id10 fill:#c594c3
    
    click id2 "https://elanresearch.nl" "ELAN research" _blank
    click id10 "https://elanresearch.nl" "ELAN research" _blank
    click id5 "../sciencecommittee" "Science committee"
    click id7 "https://www.metc-ldd.nl/toetsingsprocedures/niet-wmo-en-niet-mdr" "nWMO committee" _blank
```

```mermaid {class="mentalhealth"}
flowchart TD
    id1(Write research protocol) --> id2
    id2(Create ELAN ticket) --> id3
    id3(Send ticket to 
    ELAN research team:
    elan@lumc.nl) <-->|at least 2 months| id4
    id4(Process feedback and
    await approval
    from ELAN research team) --> id5
    id5(Submit final protocol
    to the
    science committee) -->|About 1 month| id6
    id6(Await approval by
    ELAN research team and science committee) --> id7
    id7(submit documents 
    to nWMO committee) -->|1 to 2 months| id9
    id9(Await approval) --> id10
    id10(Upload approval
    to ticket) --> idend(Start your data-analysis!)
    id6(Await approval from
    ELAN research committee) --> id8(Contact ELAN-DCC
    to start 
    set-up:
    elan.dcc@lumc.nl)

    subgraph external [These actions can be performed whenever]
        idB1(Request permission
        from Parnassia) --> idB2(Upload approval
        from Parnassia
        to ticket)
    end

    id2(Create ELAN ticket) --> external

    style idend fill:#86c985,stroke:#4d934c,stroke-width:4px
    style id2 fill:#c594c3
    style id5 fill:#c594c3
    style id7 fill:#c594c3
    style id10 fill:#c594c3
    style idB2 fill:#c594c3
    style external fill:#efd5ef, stroke:#a57ca5  
    
    click id2 "https://elanresearch.nl" "ELAN research" _blank
    click id10 "https://elanresearch.nl" "ELAN research" _blank
    click idB2 "https://elanresearch.nl" "ELAN research" _blank
    click id5 "../sciencecommittee" "Science committee"
    click id7 "https://www.metc-ldd.nl/toetsingsprocedures/niet-wmo-en-niet-mdr" "nWMO committee" _blank
```

```mermaid {class="hospital"}
flowchart TD
    id1(Write research protocol) --> id2
    id2(Create ELAN ticket) --> id3
    id3(Send ticket to 
    ELAN research team:
    elan@lumc.nl) <-->|at least 2 months| id4
    id4(Process feedback and
    await approval
    from ELAN research team) --> id5
    id5(Submit final protocol
    to the
    science committee) -->|About 1 month| id6
    id6(Await approval by
    ELAN research team and science committee) --> id7
    id7(submit documents 
    to nWMO committee) -->|1 to 2 months| id9
    id9(Await approval) --> id10
    id10(Upload approval
    to ticket) --> idend(Start your data-analysis!)
    id6(Await approval from
    ELAN research committee) --> id8(Contact ELAN-DCC
    to start 
    set-up:
    elan.dcc@lumc.nl)

    subgraph external [These actions can be performed whenever]
        idC1("Initiate research
        at hospital(s)")
    end

    id2(Create ELAN ticket) --> external

    style idend fill:#86c985,stroke:#4d934c,stroke-width:4px
    style id2 fill:#c594c3
    style id5 fill:#c594c3
    style id7 fill:#c594c3
    style id10 fill:#c594c3
    style idC1 fill:#c594c3
    style external fill:#efd5ef, stroke:#a57ca5  
    
    click id2 "https://elanresearch.nl" "ELAN research" _blank
    click id10 "https://elanresearch.nl" "ELAN research" _blank
    click id5 "../sciencecommittee" "Science committee"
    click id7 "https://www.metc-ldd.nl/toetsingsprocedures/niet-wmo-en-niet-mdr" "nWMO committee" _blank
    click idC1 "../researchhospital" "Research at a hospital"
```


```mermaid {class="hospital mentalhealth"}
flowchart TD
    id1(Write research protocol) --> id2
    id2(Create ELAN ticket) --> id3
    id3(Send ticket to 
    ELAN research team:
    elan@lumc.nl) <-->|at least 2 months| id4
    id4(Process feedback and
    await approval
    from ELAN research team) --> id5
    id5(Submit final protocol
    to the
    science committee) -->|About 1 month| id6
    id6(Await approval by
    ELAN research team and science committee) --> id7
    id7(submit documents 
    to nWMO committee) -->|1 to 2 months| id9
    id9(Await approval) --> id10
    id10(Upload approval
    to ticket) --> idend(Start your data-analysis!)
    id6(Await approval from
    ELAN research committee) --> id8(Contact ELAN-DCC
    to start 
    set-up:
    elan.dcc@lumc.nl)

    subgraph external [These actions can be performed whenever]
        idB1(Request permission
        from Parnassia) --> idB2(Upload approval
        from Parnassia
        to ticket)

        idC1("Initiate research
        at hospital(s)")
    end

    id2(Create ELAN ticket) --> external

    style idend fill:#86c985,stroke:#4d934c,stroke-width:4px
    style id2 fill:#c594c3
    style id5 fill:#c594c3
    style id7 fill:#c594c3
    style id10 fill:#c594c3
    style idB2 fill:#c594c3
    style idC1 fill:#c594c3
    style external fill:#efd5ef, stroke:#a57ca5  
    
    click id2 "https://elanresearch.nl" "ELAN research" _blank
    click id10 "https://elanresearch.nl" "ELAN research" _blank
    click idB2 "https://elanresearch.nl" "ELAN research" _blank
    click id5 "../sciencecommittee" "Science committee"
    click id7 "https://www.metc-ldd.nl/toetsingsprocedures/niet-wmo-en-niet-mdr" "nWMO committee" _blank
    click idC1 "../researchhospital" "Research at a hospital"
```