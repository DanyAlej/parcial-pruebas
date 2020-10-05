beforeEach(() => {
})

context('Creates a new task test', () => {
  it('logins correctly', () => {
    cy.visit('https://todoist.com/')
    cy.get('._3XsmI > :nth-child(1) > ._2q_cf').click();

    cy.get('#email').type('danyalej@gmail.com').should('have.value', 'danyalej@gmail.com');
    cy.get('#password').type('dany12345678');

    cy.get('.submit_btn').click();

    cy.wait(5000);
  });

  it('Correctly creates a task for the next day with priority 1', () => {
    cy.get('.task_actions > .plus_add_button').click();
    cy.get('.public-DraftStyleDefault-block').type('meditate');
    cy.get('.item_due_selector').click();
    cy.get('[data-track="scheduler|date_shortcut_tomorrow"]').click();
    cy.get('.projectSectionPill--text > span').click();
    cy.get(':nth-child(6) > :nth-child(1) > .project_picker_item > .project_picker_item_name').click();
    cy.get('.item_actions_priority > span > svg').click();
    cy.get('#dropdown-select-7-option-2 > .priority_picker_item').click();
    cy.get('.ist_button').click();
  })

  it('Creates the SAME task with natural language', () => {
    cy.get('.task_editor__editing_area').click();
    cy.get('.public-DraftStyleDefault-block').type('tom p3 #Try boards /to do meditate');
    cy.get('.ist_button').click();
  })

  it('Creates a task with no priority for today', () => {
    cy.get('.task_editor__editing_area').click();
    cy.get('.public-DraftStyleDefault-block').type('today #Try boards /to do meditate');
    cy.get('.ist_button').click();
  })

});

context('Creates a new task test', () => {
  it('Goes to upcoming and checks two of the tasks previously created', () => {
    cy.get('#filter_upcoming').click();
    cy.wait(20);
    cy.get('button[role="checkbox"]').then($buttons => {
      $buttons.get(0).click();
    });
    cy.wait(200);
    cy.get('button[role="checkbox"]').then($buttons => {
      $buttons.get(0).click();
    });
  })

  it('Checks and unchecks a taks 1000 times', () => {
    var i;
    for (i=0; i<100; i++){
      cy.get('button[role="checkbox"]').then($buttons => {
        $buttons.get(0).click();
      });
      cy.wait(30);
      cy.get('.notifier_content > :nth-child(2)').click();
    }
  })
});


context('Adds a new project', () => {
  it('Succesfullly creates a project', () => {
    cy.get('.action').click();
    cy.get('#edit_project_modal_field_name').type('Parcial de pruebas');
    cy.get('.color_dropdown_toggle').click();
    cy.get('#dropdown-select-26-option-40').click();
    cy.get('.reactist_switch').click();
    cy.get('.ist_button_red').click();
  })

  it('Deletes the project just created', () => {
    cy.get('.current > .item_table > tbody > tr > td.menu').click();
    cy.get('#menu_archive_text').click();
  })
});

context('Creates 1000 tasks', () => {
  it('Succesfullly creates a project', () => {
    cy.get('#filter_inbox > .item_content').click();
    cy.get('.plus_add_button').click();
    var i;
    for(i=0; i<1000; i++){
      cy.get('.public-DraftStyleDefault-block').type(`p3 do task ${i}`);
      cy.get('.ist_button').click();
      cy.wait(10);
    }
  })
});


//context('Edit a task', () => {
  //it('Adds a subtask', () => {
    //cy.get('li[class="task_list_item"]').then($buttons => {
      //$buttons.get(0).click();
    //});
    //cy.wait(100);
    //cy.get('.actions > .plus_add_button').click();
    //cy.get('.public-DraftStyleDefault-block').click();
    //cy.get('.public-DraftStyleDefault-block').type('Play the banjo p1');
    //cy.get('.ist_button').click();
  //})

  //it('Renames the task', () => {
    //cy.get('.item_actions_more').click();
    //cy.get('[data-action-hint="task-actions-overflow-menu-edit"]').click();
    //cy.get('.item_detail_editor > .task_editor > .task_editor__editing_area > .task_editor__content_field > .richtextinput > .DraftEditor-root > .DraftEditor-editorContainer > .notranslate > [data-contents="true"] > [data-block="true"] > .public-DraftStyleDefault-block').type('take the dog out tomorrow p1');
  //})
//});

