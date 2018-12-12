+(function() { var m; try { m = angular.module("templates"); } catch (e) { m = angular.module("templates", []); } m.run(['$templateCache', function(a) { a.put('/frontend/template/header/view/modals/mytasks.nav.html', '<!-- Modal My Task Popup -->\n' +
    '<div class="global-modal modal fade" id="my_task_popup" role="dialog">\n' +
    '  <div class="modal-dialog">\n' +
    '  \n' +
    '    <!-- Modal content-->\n' +
    '    <div class="modal-content">\n' +
    '      <div class="modal-body">\n' +
    '        <!-- Tasks Detail  -->\n' +
    '        <div class="col-md-6 no-pad-left" id="task_detail">\n' +
    '          <div class="col-md-3 no-pad-left tasker_dtl">\n' +
    '            <div class="img-holder">\n' +
    '              <img src="{{taskdata.user_image}}" alt="User Image">\n' +
    '            </div>           \n' +
    '\n' +
    '            <div id="user_rating" class="col-md12 no-padding" ng-if="taskdata.rating">\n' +
    '              <div class="star-rating rating-xs rating-disabled"><div class="clear-rating" title="Clear"><i class="glyphicon glyphicon-minus-sign"></i></div><div class="rating-container rating-fa" data-content=""><div class="rating-stars" data-content="" style="width:{{rate_width}}%"></div></div>\n' +
    '            </div>\n' +
    '\n' +
    '          </div>\n' +
    '          <div id="user_name" class="col-md12 no-padding"><a href="<?= base_url(\'taskercontroller/tasker_profile/\') ?>{{taskdata.user_id}}" class="text-center">{{taskdata.name}}</a></div> \n' +
    '          </div>\n' +
    '          <div class="col-md-5 no-padding budget_price">\n' +
    '            <p id="budget">Budget <span class="pull-right" ng-if="taskdata.task_budget">{{taskdata.task_budget}}</span> <span class="pull-right" ng-if="!taskdata.task_budget">N/A</span></p>\n' +
    '\n' +
    '            <!-- TODO:  no data in database for agreed price -->\n' +
    '            <p id="agreed_price">Agreed Price <span class="pull-right">$54</span></p>\n' +
    '            <div class="col-md-12 no-padding payment_methods">\n' +
    '              <span id="paypal_active" ng-show="taskdata.paypal_active==\'1\'"><i data-toggle="tooltip" title="" data-container="body" class="fa fa-paypal over-icons" aria-hidden="true" data-original-title="Paypal"></i></span>\n' +
    '\n' +
    '              <span id="stripe_active" ng-show="taskdata.stripe_active==\'1\'"><i data-toggle="tooltip" title="" data-container="body" class="fa fa-cc-stripe over-icons" aria-hidden="true" data-original-title="Stripe"></i></span>\n' +
    '\n' +
    '              <span id="cash_active" ng-show="taskdata.cash_active==\'1\'"><i class="fa fa-usd over-icons" data-container="body" data-toggle="tooltip" title="" aria-hidden="true" data-original-title="Cash"></i></span>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '          <div class="col-md-4 no-pad-right">\n' +
    '          <!-- TODO: functionality remain to send message -->\n' +
    '            <a href="#" data-toggle="modal" data-target="#sendMessage" class="btn btn-default">Message</a>\n' +
    '          </div>\n' +
    '\n' +
    '          <hr>\n' +
    '\n' +
    '          <div class="col-md-12 no-padding map_repost">\n' +
    '            <div class="col-md-4">\n' +
    '              <a href="#" class="btn btn-default">Map</a>\n' +
    '            </div>\n' +
    '            <div class="col-md-4">\n' +
    '              <a href="#" id="repost_task" class="btn btn-default" data-toggle="modal" data-target="#myModal">Repost</a>\n' +
    '            </div>\n' +
    '            <div class="col-md-4 share_task">\n' +
    '              <i class="fa fa-facebook-official" aria-hidden="true"></i>\n' +
    '              <i class="fa fa-twitter-square" aria-hidden="true"></i>\n' +
    '              <i class="fa fa-google-plus-square" aria-hidden="true"></i>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '\n' +
    '          <div class="col-md-12 no-padding task_details">\n' +
    '            <h6 class="text-center">Task Details</h6>\n' +
    '            <div class="col-md-3 no-pad-left">\n' +
    '              Posted\n' +
    '            </div>\n' +
    '            <div class="col-md-5 no-padding" id="date_posted">\n' +
    '              <span ng-if="taskdata.task_date">{{taskdata.task_date | date:\'MMMM, dd, yyyy\'  }}</span>\n' +
    '              <span ng-if="!taskdata.task_date">No Data Found</span>\n' +
    '            </div>\n' +
    '            <div class="col-md-4 no-pad-right" id="date_posted_stamp"> a day ago</div>\n' +
    '\n' +
    '            <div class="col-md-3 no-pad-left">\n' +
    '              Tasked\n' +
    '            </div>\n' +
    '\n' +
    '            <!-- TODO:  no data in database for tasked date -->\n' +
    '            <div class="col-md-5 no-padding" id="date_tasked">\n' +
    '              Monday 24, Feb, 2016\n' +
    '            </div>\n' +
    '            <div class="col-md-4 no-pad-right" id="date_tasked_stamp">a day ago</div>\n' +
    '\n' +
    '            <div class="col-md-3 no-pad-left">\n' +
    '              Completed\n' +
    '            </div>\n' +
    '            <div class="col-md-5 no-padding" id="date_completed">\n' +
    '              <span ng-if="taskdata.completed_date">{{taskdata.completed_date}}</span>\n' +
    '              <span ng-if="!taskdata.completed_date">No Data Found</span>\n' +
    '            </div>\n' +
    '            <div class="col-md-4 no-pad-right" id="date_completed_stamp">a day ago</div>\n' +
    '\n' +
    '            <p id="task_description">{{taskdata.task_description}}</p>\n' +
    '          </div>\n' +
    '\n' +
    '        </div>\n' +
    '        <!-- Tasks List  -->\n' +
    '        <div class="col-md-6 no-pad-right" id="tasks_list">\n' +
    '          <ul class="nav nav-tabs">\n' +
    '            <li><a data-toggle="tab" href="#employer_data">Employer</a></li>\n' +
    '            <li><a data-toggle="tab" href="#tasker_data">Tasker</a></li>\n' +
    '          </ul>\n' +
    '\n' +
    '          <div class="tab-content">\n' +
    '            <div id="employer_data" class="tab-pane fade in">\n' +
    '              <div class="col-md-12 no-padding task_status">\n' +
    '                <label><input type="radio" value="all" name="task_status">All</label>\n' +
    '                <label><input type="radio" value="open" name="task_status">Open</label>\n' +
    '                <label><input type="radio" value="tasked" name="task_status">Tasked</label>\n' +
    '              </div>\n' +
    '              <div class="col-md-12 no-padding task_search_sort">\n' +
    '                <input type="text" class="form-control pull-left" placeholder="Search..." name="location">\n' +
    '                <select class="form-control pull-right" name="" id="">\n' +
    '                  <option value="">Sort by</option>\n' +
    '                  <option value="">Price</option>\n' +
    '                  <option value="">High</option>\n' +
    '                  <option value="">Low</option>\n' +
    '                  <option value="">Date</option>\n' +
    '                </select>\n' +
    '              </div>\n' +
    '\n' +
    '              <div class="col-md-12 no-padding tasks_details">\n' +
    '                <ul>\n' +
    '                  <li id="task_$index" task_id="{{task.id}}" ng-repeat="task in employerTasks track by $index" ng-click="get_task_data(task.id)" ng-class="{\'selected\': task.id == selected}">\n' +
    '                    <div class="col-md-12 no-padding"> \n' +
    '                      <span id="posted_title" class="pull-left">{{task.task_title}}</span> \n' +
    '                      <span id="posted_date" class="pull-right">{{task.task_date | date:\'MMMM, dd, yyyy\'  }}</span>\n' +
    '                    </div>\n' +
    '                    <p>{{task.task_description}}</p>\n' +
    '                  </li>\n' +
    '                </ul>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div id="tasker_data" class="tab-pane fade in">\n' +
    '              <div class="col-md-12 no-padding task_status">\n' +
    '                <label><input type="radio" value="all" name="tasker_task_status">Offers</label>\n' +
    '                <label><input type="radio" value="open" name="tasker_task_status">Tasked</label>\n' +
    '                <label><input type="radio" value="tasked" name="tasker_task_status">Completed</label>\n' +
    '              </div>\n' +
    '              <div class="col-md-12 no-padding task_search_sort">\n' +
    '                <input type="text" class="form-control pull-left" placeholder="Search..." name="location">\n' +
    '                <select class="form-control pull-right" name="" id="">\n' +
    '                  <option value="">Sort by</option>\n' +
    '                  <option value="">Price</option>\n' +
    '                  <option value="">Newest</option>\n' +
    '                  <option value="">Oldest</option>\n' +
    '                </select>\n' +
    '              </div>\n' +
    '\n' +
    '              <div class="col-md-12 no-padding tasks_details">\n' +
    '                <ul>\n' +
    '                  <!-- <li id="task_$index" ng-repeat="task in emolpyerTasks track by $index" ng-click="myTasks(task.id)">\n' +
    '                    <div class="col-md-12 no-padding"> \n' +
    '                      <span id="posted_title" class="pull-left">Task Title</span> \n' +
    '                      <span id="posted_date" class="pull-right">date posted</span>\n' +
    '                    </div>\n' +
    '                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n' +
    '                  </li> -->\n' +
    '\n' +
    '                  <li id="task_$index" task_id="{{task.id}}" ng-repeat="task in taskerTasks track by $index" ng-click="get_task_data(task.id)" ng-class="{\'selected\': task.id == selected}">\n' +
    '                    <div class="col-md-12 no-padding"> \n' +
    '                      <span id="posted_title" class="pull-left">{{task.task_title}}</span> \n' +
    '                      <span id="posted_date" class="pull-right">{{task.task_date | date:\'MMMM, dd, yyyy\'  }}</span>\n' +
    '                    </div>\n' +
    '                    <p>{{task.task_description}}</p>\n' +
    '                  </li>\n' +
    '                  <!-- <li class="selected">\n' +
    '                    <div class="col-md-12 no-padding"> \n' +
    '                      <span id="posted_title" class="pull-left">Task Title</span> \n' +
    '                      <span id="posted_date" class="pull-right">date posted</span>\n' +
    '                    </div>\n' +
    '                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <div class="col-md-12 no-padding"> \n' +
    '                      <span id="posted_title" class="pull-left">Task Title</span> \n' +
    '                      <span id="posted_date" class="pull-right">date posted</span>\n' +
    '                    </div>\n' +
    '                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <div class="col-md-12 no-padding"> \n' +
    '                      <span id="posted_title" class="pull-left">Task Title</span> \n' +
    '                      <span id="posted_date" class="pull-right">date posted</span>\n' +
    '                    </div>\n' +
    '                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n' +
    '                  </li> -->\n' +
    '                </ul>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        \n' +
    '      </div>\n' +
    '    </div>\n' +
    '    \n' +
    '  </div>\n' +
    '</div>\n' +
    '<!-- end popup -->');
	a.put('/frontend/profile/edit-profile/view/edit-profile.html', '<div class="container" id="editProfile">\n' +
    '  <form novalidate="" name="profile" autocomplete="off">\n' +
    '    <div layout="row">\n' +
    '      <h1>Edit Profile</h1>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="col-md-3 text-center">\n' +
    '      <div layout-wrap="" layout="column">\n' +
    '        <h4>Upload Profile Picture</h4>\n' +
    '      </div>\n' +
    '      <div id="profile_image">\n' +
    '        <img src="{{form.user.user_image}}" ng-src="{{form.user.user_image}}" fallback-src="">\n' +
    '      </div>\n' +
    '      <div id="profile_image_edit">\n' +
    '        <input type="file" ngf-drop="" ngf-select="" ng-model="imageUrl" on-file-change="upload" id="profile-file" name="task_img" class="" ngf-drag-over-class="\'dragover\'" ngf-multiple="false" ngf-allow-dir="true" accept="image/*" ngf-pattern="\'image/*\'" ngf-max-size="20MB">\n' +
    '      </div>\n' +
    '      <div id="save-profile-btn" class="form-group text-center" ng-if="imageUrl">\n' +
    '        <md-button class="md-raised md-primary" ng-click="savePhoto()">Save Profile Photo</md-button>\n' +
    '        <md-button class="md-raised md-primary" ng-click="cancelPhoto()">Cancel</md-button>\n' +
    '      </div>\n' +
    '      <div class="user_info text-center">\n' +
    '        <div class="col-md-12 no-padding payment_methods">\n' +
    '          <h4>Payments</h4>\n' +
    '          <span id="paypal_active"><i class="fa fa-paypal" ng-class="form.user.paypal_active && \'over-icons\'">\n' +
    '                <md-tooltip md-z-index="9999" md-delay="10" md-direction="top">\n' +
    '              Paypal\n' +
    '            </md-tooltip></i></span>\n' +
    '\n' +
    '          <span id="stripe_active"><i class="fa fa-cc-stripe" ng-class="form.user.stripe_active==1 && \'over-icons\'">\n' +
    '                <md-tooltip md-z-index="9999" md-delay="10" md-direction="top">\n' +
    '              Stripe\n' +
    '            </md-tooltip></i></span>\n' +
    '\n' +
    '          <span id="cash_active"><i class="fa fa-usd" ng-class="form.user.cash_active==1 && \'over-icons\'">\n' +
    '                <md-tooltip md-z-index="9999" md-delay="10" md-direction="top">\n' +
    '              Cash\n' +
    '            </md-tooltip></i></span>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="col-md-12 no-padding peace_of_mind">\n' +
    '          <h4>Peace of Mind</h4>\n' +
    '          <span id="paypal_active"><i class="fa fa-gavel" ng-class="form.user.cr && \'over-icons\'">\n' +
    '          <md-tooltip md-z-index="9999" md-delay="10" md-direction="top">\n' +
    '              Criminal Record\n' +
    '            </md-tooltip></i></span>\n' +
    '          <span id="paypal_active"><i class="fa fa-balance-scale" ng-class="form.user.ecm && \'over-icons\'">\n' +
    '          <md-tooltip md-z-index="9999" md-delay="10" md-direction="top">\n' +
    '              Enhanced Criminal Record\n' +
    '            </md-tooltip></i></span>\n' +
    '          <span id="paypal_active"><i class="fa fa-clone" ng-class="form.user.red_seal && \'over-icons\'">\n' +
    '          <md-tooltip md-z-index="9999" md-delay="10" md-direction="top">\n' +
    '              Red Seal\n' +
    '            </md-tooltip></i></span>\n' +
    '          <span id="paypal_active"><i class="fa fa-medkit" ng-class="form.user.first_aid && \'over-icons\'">\n' +
    '          <md-tooltip md-z-index="9999" md-delay="10" md-direction="top">\n' +
    '              Fist Aid\n' +
    '            </md-tooltip></i></span>\n' +
    '          <span id="paypal_active"><i class="fa fa-thumbs-up" ng-class="form.user.insurance && \'over-icons\'">\n' +
    '          <md-tooltip md-z-index="9999" md-delay="10" md-direction="top">\n' +
    '              Insurance\n' +
    '            </md-tooltip></i></span>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="col-md-12 no-padding peace_of_mind">\n' +
    '          <h4>Modes of Transportation</h4>\n' +
    '          <!--<span id="paypal_active"><i class="fa fa-male ">\n' +
    '          <md-tooltip md-z-index="9999" md-delay="10" md-direction= "top" ng-class="form.user.walk && \'over-icons\'">\n' +
    '              Walk\n' +
    '            </md-tooltip></i></span>-->\n' +
    '          <span id="paypal_active"><i class="fa fa-motorcycle" ng-class="form.user.bicycle && \'over-icons\'">\n' +
    '          <md-tooltip md-z-index="9999" md-delay="10" md-direction="top">\n' +
    '              Bicycle\n' +
    '            </md-tooltip></i></span>\n' +
    '          <span id="paypal_active"><i class="fa fa-bus" ng-class="form.user.public && \'over-icons\'">\n' +
    '          <md-tooltip md-z-index="9999" md-delay="10" md-direction="top">\n' +
    '              Public\n' +
    '            </md-tooltip></i></span>\n' +
    '          <span id="paypal_active"><i class="fa fa-car" ng-class="form.user.car && \'over-icons\'">\n' +
    '          <md-tooltip md-z-index="9999" md-delay="10" md-direction="top">\n' +
    '              Car\n' +
    '            </md-tooltip></i></span>\n' +
    '          <span id="paypal_active"><i class="fa fa-truck" ng-class="form.user.truck && \'over-icons\'">\n' +
    '          <md-tooltip md-z-index="9999" md-delay="10" md-direction="top">\n' +
    '              Truck\n' +
    '            </md-tooltip></i></span>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="col-md-9">\n' +
    '      <div layout="row">\n' +
    '        <md-input-container flex="33">\n' +
    '          <label>First Name</label>\n' +
    '          <input required="" name="name" ng-model="form.user.name">\n' +
    '          <div ng-messages="profile.name.$invalid">\n' +
    '            <div ng-message="required">This is required.</div>\n' +
    '          </div>\n' +
    '        </md-input-container>\n' +
    '\n' +
    '        <md-input-container flex="33">\n' +
    '          <label>Last Name</label>\n' +
    '          <input required="" name="lname" ng-model="form.user.lname">\n' +
    '          <div ng-messages="profile.lname.$invalid">\n' +
    '            <div ng-message="required">This is required.</div>\n' +
    '          </div>\n' +
    '        </md-input-container>\n' +
    '\n' +
    '        <md-input-container flex="33">\n' +
    '          <label>Email</label>\n' +
    '          <input name="email" ng-model="form.user.email" required="" maxlength="100" ng-pattern="/^.+@.+\..+$/" disabled="disabled">\n' +
    '          <div ng-messages="profile.email.$error">\n' +
    '            <div ng-message="required">This is required.</div>\n' +
    '          </div>\n' +
    '        </md-input-container>\n' +
    '        <!--<md-input-container flex="50">\n' +
    '          <label>Project Type</label>\n' +
    '          <md-select name="type" ng-model="project.type" required>\n' +
    '            <md-option value="app">Application</md-option>\n' +
    '            <md-option value="web">Website</md-option>\n' +
    '          </md-select>\n' +
    '        </md-input-container>-->\n' +
    '      </div>\n' +
    '      <div layout="row">\n' +
    '          <md-input-container flex="100">\n' +
    '          <label>Description</label>\n' +
    '          <textarea md-maxlength="500" id="description" required="" md-no-asterisk="" name="user_description" ng-model="form.user.user_description"></textarea>\n' +
    '          <div ng-messages="profile.user_description.$error" role="alert">\n' +
    '            <div ng-message="required">This is required.</div>\n' +
    '            <div ng-message="maxlength">The description must be less than 500 characters long.</div>\n' +
    '          </div>\n' +
    '        </md-input-container>\n' +
    '      </div>\n' +
    '      <div layout="row">\n' +
    '        <md-input-container flex="33">\n' +
    '          <label>Telephone</label>\n' +
    '          <input name="telephone" ng-model="form.user.telephone" ng-pattern="/^[0-9]*$/">\n' +
    '          <div ng-messages="profile.telephone.$error">\n' +
    '            <div ng-message="pattern">Please enter a valid phone number.</div>\n' +
    '          </div>\n' +
    '\n' +
    '        </md-input-container>\n' +
    '\n' +
    '        <md-input-container flex="33">\n' +
    '          <label>Street Address <i class="fa fa-exclamation-circle" aria-hidden="true"> \n' +
    '            <md-tooltip md-delay="10" md-direction="top">\n' +
    '                Not visible publicly\n' +
    '            </md-tooltip>\n' +
    '        </i></label>\n' +
    '          <input ng-model="form.user.streetaddress" name="streetaddress" ng-change="update()" autocomplete="false" g-places-autocomplete="" options="autocompleteOptions" force-selection="true" required="">\n' +
    '          <div ng-messages="profile.streetaddress.$error" role="alert">\n' +
    '            <div ng-message="required">This is required.</div>\n' +
    '          </div>\n' +
    '        </md-input-container>\n' +
    '        <md-input-container flex="33">\n' +
    '          <label>City</label>\n' +
    '          <input ng-model="form.user.location" name="location" force-selection="true" disabled="disabled" required="">\n' +
    '          <div ng-messages="profile.location.$error">\n' +
    '            <div ng-message="required">This is required.</div>\n' +
    '          </div>\n' +
    '        </md-input-container>\n' +
    '      </div>\n' +
    '\n' +
    '      <div layout-wrap="" layout="row">\n' +
    '        <h4 flex="100">How do you prefer to pay and be paid?</h4>\n' +
    '        <div flex="25">\n' +
    '          <md-checkbox ng-model="form.user.paypal_active" ng-checked="form.user.paypal_active == 1" ng-true-value="1" aria-label="Paypal">\n' +
    '            Paypal\n' +
    '          </md-checkbox>\n' +
    '          <md-input-container ng-show="form.user.paypal_active == 1" fmessage="">\n' +
    '            <label>Email</label>\n' +
    '            <input ng-model="form.user.paypal_email" type="email" required="">\n' +
    '          </md-input-container>\n' +
    '        </div>\n' +
    '        <div flex="100">\n' +
    '          <md-checkbox ng-model="form.user.stripe_active" ng-checked="form.user.stripe_active == 1" ng-true-value="1" aria-label="Stripe">\n' +
    '            Stripe\n' +
    '          </md-checkbox>\n' +
    '        </div>\n' +
    '        <div flex="100">\n' +
    '          <md-checkbox ng-model="form.user.cash_active" ng-checked="form.user.cash_active == 1" ng-true-value="1" aria-label="Cash">\n' +
    '            Cash\n' +
    '          </md-checkbox>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '\n' +
    '      <div layout-wrap="" layout="row">\n' +
    '        <h4 flex="100">What is your Peace of Mind?</h4>\n' +
    '        <div flex="25">\n' +
    '          <md-checkbox ng-model="form.user.cr" ng-checked="form.peace_of_mind.criminal_record == 1" ng-true-value="1" aria-label="Criminal Record">\n' +
    '            Criminal Record\n' +
    '          </md-checkbox>\n' +
    '        </div>\n' +
    '        <div flex="25">\n' +
    '          <md-checkbox ng-model="form.user.ecm" ng-checked="form.peace_of_mind.enhanced_criminal_record == 1" ng-true-value="1" aria-label="Enhanced Criminal Record">\n' +
    '            Enhanced Criminal Record\n' +
    '          </md-checkbox>\n' +
    '        </div>\n' +
    '        <div flex="25">\n' +
    '          <md-checkbox ng-model="form.user.red_seal" ng-checked="form.peace_of_mind.red_seal == 1" ng-true-value="1" aria-label="Red Seal">\n' +
    '            Red Seal\n' +
    '          </md-checkbox>\n' +
    '        </div>\n' +
    '        <div flex="25">\n' +
    '          <md-checkbox ng-model="form.user.first_aid" ng-checked="form.peace_of_mind.first_aid == 1" ng-true-value="1" aria-label="First Aid">\n' +
    '            First Aid\n' +
    '          </md-checkbox>\n' +
    '        </div>\n' +
    '        <div flex="25">\n' +
    '          <md-checkbox ng-model="form.user.insurance" ng-checked="form.peace_of_mind.insurance == 1" ng-true-value="1" aria-label="Insurance">\n' +
    '            Insurance\n' +
    '          </md-checkbox>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '\n' +
    '      <div layout-wrap="" layout="row">\n' +
    '        <h4 flex="100">What modes of transportation do you have?</h4>\n' +
    '\n' +
    '        <div flex="25">\n' +
    '          <md-checkbox ng-model="form.user.bicycle" ng-checked="form.transportation.bicycle == 1" ng-true-value="1" aria-label="Bicycle">\n' +
    '            Bicycle\n' +
    '          </md-checkbox>\n' +
    '        </div>\n' +
    '        <div flex="25">\n' +
    '          <md-checkbox ng-model="form.user.public" ng-checked="form.transportation.public == 1" ng-true-value="1" aria-label="Public">\n' +
    '            Public\n' +
    '          </md-checkbox>\n' +
    '        </div>\n' +
    '        <div flex="25">\n' +
    '          <md-checkbox ng-model="form.user.car" ng-checked="form.transportation.car == 1" ng-true-value="1" aria-label="By Car">\n' +
    '            Car\n' +
    '          </md-checkbox>\n' +
    '        </div>\n' +
    '\n' +
    '        <div flex="25">\n' +
    '          <md-checkbox ng-model="form.user.truck" ng-checked="form.transportation.truck == 1" ng-true-value="1" aria-label="Truck">\n' +
    '            Truck\n' +
    '          </md-checkbox>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '      <div layout-wrap="" layout="row">\n' +
    '        <h4 flex="100" class="md-title">Skill Set\n' +
    '          <i class="fa fa-exclamation-circle" aria-hidden="true"> \n' +
    '                <md-tooltip md-delay="10" md-direction="top">\n' +
    '                    Type Tag and Press Enter to insert a new tag\n' +
    '                </md-tooltip>\n' +
    '            </i>\n' +
    '        </h4>\n' +
    '        <md-chips flex="100" ng-model="form.skills" md-autocomplete-snap="" md-require-match="" md-highlight-flags="i" filter-selected="true" md-max-chips="30" readonly="false" md-removable="true" md-enable-chip-edit="true" md-transform-chip="newTag($chip)" ng-keyup="$event.keyCode == 13 ? edit_user(form) : return">\n' +
    '          <md-chip-template>\n' +
    '            <strong>{{$chip.tag}}</strong>\n' +
    '          </md-chip-template>\n' +
    '          <md-autocomplete md-selected-item="skill" md-search-text="searchText" md-items="item in getMatchesForSkills(searchText)" md-item-text="item.tag" placeholder="Search Skills" md-no-cache="true">\n' +
    '            <md-item-template>\n' +
    '              <span md-highlight-text="searchText" md-highlight-flags="^i">{{item.tag}}</span>\n' +
    '            </md-item-template>\n' +
    '            <md-not-found>\n' +
    '              Add a new Tag...\n' +
    '            </md-not-found>\n' +
    '          </md-autocomplete>\n' +
    '        </md-chips>\n' +
    '\n' +
    '      </div>\n' +
    '\n' +
    '      <div layout-wrap="" layout="row">\n' +
    '        <h4 flex="100" class="md-title">Education/Certification\n' +
    '          <i class="fa fa-exclamation-circle" aria-hidden="true"> \n' +
    '                <md-tooltip md-delay="10" md-direction="top">\n' +
    '                    Type Tag and Press Enter to insert a new tag\n' +
    '                </md-tooltip>\n' +
    '            </i>\n' +
    '        </h4>\n' +
    '        <md-content layout="row">\n' +
    '        <md-chips flex="100" ng-model="form.education" md-autocomplete-snap="" md-require-match="" md-highlight-flags="i" filter-selected="true" md-max-chips="30" readonly="false" md-removable="true" md-enable-chip-edit="true" md-transform-chip="newTag($chip)" ng-keyup="$event.keyCode == 13 ? edit_user(form) : return">\n' +
    '          <md-chip-template>\n' +
    '            <strong>{{$chip.tag}}</strong>\n' +
    '          </md-chip-template>\n' +
    '          <md-autocomplete md-selected-item="edu" md-search-text="searchText" md-items="item in getMatchesForEdu(searchText)" md-item-text="item.tag" placeholder="Search Education/Certification" md-no-cache="true">\n' +
    '            <md-item-template>\n' +
    '              <span md-highlight-text="searchText" md-highlight-flags="^i">{{item.tag}}</span>\n' +
    '            </md-item-template>\n' +
    '            <md-not-found>\n' +
    '              Add a new Tag...\n' +
    '            </md-not-found>\n' +
    '          </md-autocomplete>\n' +
    '        </md-chips>\n' +
    '      </md-content>\n' +
    '      </div>\n' +
    '      <!-- Certifications should be equipment now in frontend, backend and DB -->\n' +
    '      <div layout-wrap="" layout="row">\n' +
    '        <h4 flex="100" class="md-title">Equipment\n' +
    '          <i class="fa fa-exclamation-circle" aria-hidden="true"> \n' +
    '                <md-tooltip md-delay="10" md-direction="top">\n' +
    '                    Type Tag and Press Enter to insert a new tag\n' +
    '                </md-tooltip>\n' +
    '            </i>\n' +
    '        </h4>\n' +
    '        <md-chips flex="100" ng-model="form.certifications" md-autocomplete-snap="" md-require-match="" md-highlight-flags="i" filter-selected="true" md-max-chips="30" readonly="false" md-removable="true" md-enable-chip-edit="true" md-transform-chip="newTag($chip)" ng-keyup="$event.keyCode == 13 ? edit_user(form) : return">\n' +
    '          <md-chip-template>\n' +
    '            <strong>{{$chip.tag}}</strong>\n' +
    '          </md-chip-template>\n' +
    '          <md-autocomplete md-selected-item="edu" md-search-text="searchText" md-items="item in getMatchesForCert(searchText)" md-item-text="item.tag" placeholder="Search Equipment" md-no-cache="true">\n' +
    '            <md-item-template>\n' +
    '              <span md-highlight-text="searchText" md-highlight-flags="^i">{{item.tag}}</span>\n' +
    '            </md-item-template>\n' +
    '            <md-not-found>\n' +
    '              Add a new Tag...\n' +
    '            </md-not-found>\n' +
    '          </md-autocomplete>\n' +
    '        </md-chips>\n' +
    '      </div>\n' +
    '\n' +
    '\n' +
    '      <div layout-wrap="" layout="row">\n' +
    '        <md-button class="md-raised md-primary save-profile-btn" ng-click="edit_user(form)">Save Profile\n' +
    '          <md-tooltip md-z-index="9999" md-delay="10" md-direction="top">\n' +
    '           Click here to save profile\n' +
    '          </md-tooltip>\n' +
    '        </md-button>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </form>\n' +
    '</div>');
	a.put('/frontend/pages/terms/view/terms.view.html', '<header id="alt" class="how-page">\n' +
    '        <div class="dark-overlay"></div>\n' +
    '        <div class="wrap-content">\n' +
    '            <div class="center-content">\n' +
    '                <div class="container">\n' +
    '                    <div class="row">\n' +
    '                        <div class="col-md-12">\n' +
    '                            <h2>Terms of Service</h2>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '</header>\n' +
    '<div class="container">\n' +
    '<div class="page-content">\n' +
    '    <div class="row">\n' +
    '        <div class="col-md-12">\n' +
    '            <h5>Overview</h5>\n' +
    '            <p>This website is operated by Taskoli. Throughout the site, the terms &ldquo;we&rdquo;, &ldquo;us&rdquo; and &ldquo;our&rdquo; refer to taskoli. Taskoli offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.</p>\n' +
    '            <p>By visiting our site and/ or purchasing something from us, you engage in our &ldquo;Service&rdquo; and agree to be bound by the following terms and conditions (&ldquo;Terms of Service&rdquo;, &ldquo;Terms&rdquo;), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply&nbsp; to all users of the site, including without limitation users who are browsers, employers, taskers, customers, service providers, and/ or contributors of content.</p>\n' +
    '            <p>Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services. If these Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Service.</p>\n' +
    '            <p>Any new features or tools which are added to the current website shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes.</p>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '<div class="page-content">\n' +
    '        <div class="row">\n' +
    '            <div class="col-md-12">\n' +
    '                <h5>SECTION 1 - ONLINE TERMS</h5>\n' +
    '                <p class="p1">By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.</p>\n' +
    '                <p class="p1">You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).</p>\n' +
    '                <p class="p1">You must not transmit any worms or viruses or any code of a destructive nature.</p>\n' +
    '                <p class="p1">A breach or violation of any of the Terms will result in an immediate termination of your Services.</p>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '<div class="page-content">\n' +
    '    <div class="row">\n' +
    '        <div class="col-md-12">\n' +
    '            <h5>SECTION 2 - GENERAL CONDITIONS</h5>\n' +
    '            <p class="p1">We reserve the right to refuse service to anyone for any reason at any time.</p>\n' +
    '            <p class="p1">You understand that your content (not including credit card information), may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices. Credit card information is always encrypted during transfer over networks.</p>\n' +
    '            <p class="p1">You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the website through which the service is provided, without express written permission by us.</p>\n' +
    '            <p class="p1">The headings used in this agreement are included for convenience only and will not limit or otherwise affect these Terms.</p>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '    <div class="page-content">\n' +
    '            <div class="row">\n' +
    '                <div class="col-md-12">\n' +
    '                    <h5>SECTION 3 - ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION</h5>\n' +
    '                    <p class="p1">We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or more timely sources of information such as but not limited to<span class="Apple-converted-space">&nbsp; </span>employers, or<span class="Apple-converted-space">&nbsp; </span>taskers. Any reliance on the material on this site is at your own risk.</p>\n' +
    '                    \n' +
    '                    <p class="p1">This site may contain certain historical information. Historical information, necessarily, is not current and is provided for your reference only. We reserve the right to modify the contents of this site at any time, but we have no obligation to update any information on our site. You agree that it is your responsibility to monitor changes to our site.</p>\n' +
    '                    \n' +
    '                    \n' +
    '                </div>\n' +
    '            </div>\n' +
    '    </div> \n' +
    '    <div class="page-content">\n' +
    '            <div class="row">\n' +
    '                <div class="col-md-12">\n' +
    '                    <h5>SECTION 4 - MODIFICATIONS TO THE SERVICE AND PRICES</h5>\n' +
    '                    \n' +
    '                    <p class="p1">Prices for our services are subject to change without notice.</p>\n' +
    '                    \n' +
    '                    <p class="p1">We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time.</p>\n' +
    '                    \n' +
    '                    <p class="p1">We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service.</p>\n' +
    '                    \n' +
    '                    \n' +
    '                </div>\n' +
    '            </div>\n' +
    '    </div>   \n' +
    '    <div class="page-content">\n' +
    '            <div class="row">\n' +
    '                <div class="col-md-12">\n' +
    '                    <h5>SECTION 5 &ndash; EMPLOYER AND TASKER RESPONSIBILITIES</h5>\n' +
    '                    <p class="p1">You agree that we are in no way resposible for any disagreements between users. You agree that we merely provide access toa platform for outsourcing tasks, bidding on tasks, accepting/rejecting tasks, and/or hiring taskers and that we do not in any way mediate disputes. You agree that we are not responsible for any damages to property or reputation, of either party, and that we are not responsible for any injuries which may occur to either party while performing services through our platform. Taskers and Employers are responsible for agreeing to a price, paying/ collecting payment, paying taxes and that we are not involved in your transactions.</p>\n' +
    '                    \n' +
    '                </div>\n' +
    '            </div>\n' +
    '    </div>\n' +
    '    <div class="page-content">\n' +
    '            <div class="row">\n' +
    '                <div class="col-md-12">\n' +
    '                    <h5>SECTION 6 - ACCURACY OF BILLING AND ACCOUNT INFORMATION</h5>\n' +
    '                    <p class="p4">We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household or per order. These restrictions may include orders placed by or under the same customer account, the same credit card, and/or orders that use the same billing and/or shipping address. In the event that we make a change to or cancel an order, we may attempt to notify you by contacting the e-mail and/or billing address/phone number provided at the time the order was made. We reserve the right to limit or prohibit orders that, in our sole judgment, appear to be placed by dealers, resellers or distributors.</p>\n' +
    '                    \n' +
    '                    <p class="p1">You agree to provide current, complete and accurate<span class="Apple-converted-space">&nbsp; </span>account information for all services purchased at our website. You agree to promptly update your account and other information, including your email address and credit card numbers and expiration dates, so that we can complete your transactions and contact you as needed.</p>\n' +
    '                    \n' +
    '                    \n' +
    '                </div>\n' +
    '            </div>\n' +
    '    </div>     \n' +
    '    <div class="page-content">\n' +
    '            <div class="row">\n' +
    '                <div class="col-md-12">\n' +
    '                    <h5>SECTION 7 - OPTIONAL TOOLS</h5>\n' +
    '                    <p class="p1">We may provide you with access to third-party tools over which we neither monitor nor have any control nor input.</p>\n' +
    '                    \n' +
    '                    <p class="p1">You acknowledge and agree that we provide access to such tools &rdquo;as is&rdquo; and &ldquo;as available&rdquo; without any warranties, representations or conditions of any kind and without any endorsement. We shall have no liability whatsoever arising from or relating to your use of optional third-party tools.</p>\n' +
    '                    \n' +
    '                    <p class="p1">Any use by you of optional tools offered through the site is entirely at your own risk and discretion and you should ensure that you are familiar with and approve of the terms on which tools are provided by the relevant third-party provider(s).</p>\n' +
    '                    \n' +
    '                    <p class="p1">We may also, in the future, offer new services and/or features through the website (including, the release of new tools and resources). Such new features and/or services shall also be subject to these Terms of Service.</p>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '    </div>\n' +
    '    <div class="page-content">\n' +
    '            <div class="row">\n' +
    '                <div class="col-md-12">\n' +
    '                    <h5>SECTION 8 - THIRD-PARTY LINKS</h5>\n' +
    '                    <p class="p1">Third-party links on this site may direct you to third-party websites that are not affiliated with us. We are not responsible for examining or evaluating the content or accuracy and we do not warrant and will not have any liability or responsibility for any third-party materials or websites, or for any other materials, products, or services of third-parties.</p>\n' +
    '                    \n' +
    '                    <p class="p1">We are not liable for any harm or damages related to the purchase or use of goods, services, resources, content, or any other transactions made in connection with any third-party websites. Please review carefully the third-party\'s policies and practices and make sure you understand them before you engage in any transaction. Complaints, claims, concerns, or questions regarding third-party products should be directed to the third-party.</p>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '    </div>\n' +
    '    <div class="page-content">\n' +
    '            <div class="row">\n' +
    '                <div class="col-md-12">\n' +
    '                    <h5>SECTION 9 - USER COMMENTS, FEEDBACK AND OTHER SUBMISSIONS</h5>\n' +
    '                    <p class="p1">If, at our request, you send certain specific submissions (for example contest entries) or without a request from us you send creative ideas, suggestions, proposals, plans, or other materials, whether online, by email, by postal mail, or otherwise (collectively, \'comments\'), you agree that we may, at any time, without restriction, edit, copy, publish, distribute, translate and otherwise use in any medium any comments that you forward to us or post on the website as a review or question. We are and shall be under no obligation (1) to maintain any comments in confidence; (2) to pay compensation for any comments; or (3) to respond to any comments.</p>\n' +
    '                    \n' +
    '                    <p class="p1">We may, but have no obligation to, monitor, edit or remove content that we determine in our sole discretion are unlawful, offensive, threatening, libelous, defamatory, pornographic, obscene or otherwise objectionable or violates any party&rsquo;s intellectual property or these Terms of Service.</p>\n' +
    '                    \n' +
    '                    <p class="p1">You agree that your comments will not violate any right of any third-party, including copyright, trademark, privacy, personality or other personal or proprietary right. You further agree that your comments will not contain libelous or otherwise unlawful, abusive or obscene material, or contain any computer virus or other malware that could in any way affect the operation of the Service or any related website. You may not use a false e-mail address, pretend to be someone other than yourself, or otherwise mislead us or third-parties as to the origin of any comments. You are solely responsible for any comments you make and their accuracy. We take no responsibility and assume no liability for any comments posted by you or any third-party.</p>\n' +
    '                    \n' +
    '                    <p class="p1">You agree that you will abide by our terms and that you will not post your contact details, phone number, email, address, or any other forms of electronic (chat/comments) or paper communication, in an attempt to circumvent the proper use of our site. You agree to a fine of $100.00 for each infraction, as solely determined by us.</p>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '    </div>\n' +
    '    <div class="page-content">\n' +
    '            <div class="row">\n' +
    '                <div class="col-md-12">\n' +
    '                    <h5>SECTION 10 - PERSONAL INFORMATION</h5>\n' +
    '                    <p class="p1">Your submission of personal information through the website is governed by our <a ui-sref="page.policy">Privacy Policy.</a></p>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '    </div>\n' +
    '    <div class="page-content">\n' +
    '            <div class="row">\n' +
    '                <div class="col-md-12">\n' +
    '                    <h5>SECTION 11 - ERRORS, INACCURACIES AND OMISSIONS</h5>\n' +
    '                    <p class="p1">Occasionally there may be information on our site or in the Service that contains typographical errors, inaccuracies or omissions that may relate to product descriptions, pricing, promotions, offers, product shipping charges, transit times and availability. We reserve the right to correct any errors, inaccuracies or omissions, and to change or update information or cancel orders if any information in the Service or on any related website is inaccurate at any time without prior notice (including after you have submitted your order).</p>\n' +
    '                    \n' +
    '                    <p class="p1">We undertake no obligation to update, amend or clarify information in the Service or on any related website, including without limitation, pricing information, except as required by law. No specified update or refresh date applied in the Service or on any related website, should be taken to indicate that all information in the Service or on any related website has been modified or updated.</p>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '    </div>\n' +
    '    <div class="page-content">\n' +
    '            <div class="row">\n' +
    '                <div class="col-md-12">\n' +
    '                    <h5>SECTION 12 - PROHIBITED USES</h5>\n' +
    '                    <p class="p1">In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the site or its content: (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international, federal, provincial, municipal or state regulations, rules, laws, or local ordinances; (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability; (f) to submit false or misleading information; (g) to upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Service or of any related website, other websites, or the Internet; (h) to collect or track the personal information of others; (i) to spam, phish, pharm, pretext, spider, crawl, or scrape; (j) for any obscene or immoral purpose; or (k) to interfere with or circumvent the security features of the Service or any related website, other websites, or the Internet. We reserve the right to terminate your use of the Service for violating any of the prohibited uses.</p>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '    </div>\n' +
    '    <div class="page-content">\n' +
    '            <div class="row">\n' +
    '                <div class="col-md-12">\n' +
    '                    <h5>SECTION 13 - DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY</h5>\n' +
    '                    <p class="p1">We do not guarantee, represent or warrant that your use of our service will be uninterrupted, timely, secure or error-free.</p>\n' +
    '                    \n' +
    '                    <p class="p1">We do not warrant that the results that may be obtained from the use of the service will be accurate or reliable.</p>\n' +
    '                    \n' +
    '                    <p class="p1">You agree that from time to time we may remove the service for indefinite periods of time or cancel the service at any time, without notice to you.</p>\n' +
    '                    \n' +
    '                    <p class="p1">You expressly agree that your use of, or inability to use, the service is at your sole risk. The service and all products and services delivered to you through the service are (except as expressly stated by us) provided \'as is\' and \'as available\' for your use, without any representation, warranties or conditions of any kind, either express or implied, including all implied warranties or conditions of merchantability, merchantable quality, fitness for a particular purpose, durability, title, and non-infringement.</p>\n' +
    '                    \n' +
    '                    <p class="p1">In no case shall taskoli, our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, including, without limitation lost profits, lost revenue, lost savings, loss of data, replacement costs, or any similar damages, whether based in contract, tort (including negligence), strict liability or otherwise, arising from your use of any of the service or any products procured using the service, or for any other claim related in any way to your use of the service or any product, including, but not limited to, any errors or omissions in any content, or any loss or damage of any kind incurred as a result of the use of the service or any content (or product) posted, transmitted, or otherwise made available via the service, even if advised of their possibility. Because some states or jurisdictions do not allow the exclusion or the limitation of liability for consequential or incidental damages, in such states or jurisdictions, our liability shall be limited to the maximum extent permitted by law.</p>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '    </div>\n' +
    '    <div class="page-content">\n' +
    '            <div class="row">\n' +
    '                <div class="col-md-12">\n' +
    '                    <h5>SECTION 14 - INDEMNIFICATION</h5>\n' +
    '                    <p class="p1">You agree to indemnify, defend and hold harmless taskoli and our parent, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns and employees, harmless from any claim or demand, including reasonable attorneys&rsquo; fees, made by any third-party due to or arising out of your breach of these Terms of Service or the documents they incorporate by reference, or your violation of any law or the rights of a third-party.</p>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '    </div>\n' +
    '    <div class="page-content">\n' +
    '            <div class="row">\n' +
    '                <div class="col-md-12">\n' +
    '                    <h5>SECTION 15 - SEVERABILITY</h5>\n' +
    '                    <p class="p1">In the event that any provision of these Terms of Service is determined to be unlawful, void or unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed to be severed from these Terms of Service, such determination shall not affect the validity and enforceability of any other remaining provisions.</p>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '    </div>\n' +
    '    <div class="page-content">\n' +
    '            <div class="row">\n' +
    '                <div class="col-md-12">\n' +
    '                    <h5>SECTION 16 - TERMINATION</h5>\n' +
    '                    <p class="p1">The obligations and liabilities of the parties incurred prior to the termination date shall survive the termination of this agreement for all purposes.</p>\n' +
    '                    <p class="p1">These Terms of Service are effective unless and until terminated by either you or us. You may terminate these Terms of Service at any time by notifying us that you no longer wish to use our Services, or when you cease using our site.</p>\n' +
    '                    \n' +
    '                    <p class="p1">If in our sole judgment you fail, or we suspect that you have failed, to comply with any term or provision of these Terms of Service, we also may terminate this agreement at any time without notice and you will remain liable for all amounts due up to and including the date of termination; and/or accordingly may deny you access to our Services (or any part thereof).</p>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '    </div>\n' +
    '    <div class="page-content">\n' +
    '            <div class="row">\n' +
    '                <div class="col-md-12">\n' +
    '                    <h5>SECTION 17 - ENTIRE AGREEMENT</h5>\n' +
    '                    <p class="p1">The failure of us to exercise or enforce any right or provision of these Terms of Service shall not constitute a waiver of such right or provision.</p>\n' +
    '                    \n' +
    '                    <p class="p1">These Terms of Service and any policies or operating rules posted by us on this site or in respect to The Service constitutes the entire agreement and understanding between you and us and govern your use of the Service, superseding any prior or contemporaneous agreements, communications and proposals, whether oral or written, between you and us (including, but not limited to, any prior versions of the Terms of Service).</p>\n' +
    '                    \n' +
    '                    <p class="p1">Any ambiguities in the interpretation of these Terms of Service shall not be construed against the drafting party.</p>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '    </div>\n' +
    '    <div class="page-content">\n' +
    '            <div class="row">\n' +
    '                <div class="col-md-12">\n' +
    '                    <h5>SECTION 18 - GOVERNING LAW</h5>\n' +
    '                    <p class="p1">These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of 611 admirals rd., victoria, BC, V9A 2N6, Canada.</p>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '    </div>\n' +
    '    <div class="page-content">\n' +
    '            <div class="row">\n' +
    '                <div class="col-md-12">\n' +
    '                    <h5>SECTION 19 - CHANGES TO TERMS OF SERVICE</h5>\n' +
    '                    <p class="p1">You can review the most current version of the Terms of Service at any time at this page.</p>\n' +
    '                    \n' +
    '                    <p class="p1">We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our website. It is your responsibility to check our website periodically for changes. Your continued use of or access to our website or the Service following the posting of any changes to these Terms of Service constitutes acceptance of those changes.</p>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '    </div>\n' +
    '    <div class="page-content">\n' +
    '            <div class="row">\n' +
    '                <div class="col-md-12">\n' +
    '                    <h5>SECTION 20 - CONTACT INFORMATION</h5>\n' +
    '                    <p class="p1">Questions about the Terms of Service should be sent to us at thetribe@taskoli.com.</p>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '    </div>\n' +
    '</div>');
	a.put('/frontend/pages/rules/view/rules.view.html', '<h1>Rules</h1>');
	a.put('/frontend/pages/policy/view/policy.view.html', '<header id="alt" class="how-page">\n' +
    '        <div class="dark-overlay"></div>\n' +
    '        <div class="wrap-content">\n' +
    '            <div class="center-content">\n' +
    '                <div class="container">\n' +
    '                    <div class="row">\n' +
    '                        <div class="col-md-12">\n' +
    '                            <h2>Privacy Policy</h2>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '</header>\n' +
    '<div class="container">\n' +
    '<div class="page-content">\n' +
    '    <div class="row">\n' +
    '        <div class="col-md-12">\n' +
    '            <h5>SECTION 1 - WHAT DO WE DO WITH YOUR INFORMATION?</h5>\n' +
    '            <p>When you purchase something from our store, as part of the buying and selling process, we collect the personal information you give us such as your name, address and email address.</p>\n' +
    '            <p>When you browse our store, we also automatically receive your computer’s internet protocol (IP) address in order to provide us with information that helps us learn about your browser and operating system.</p>\n' +
    '            <p>Email marketing (if applicable): With your permission, we may send you emails about our store, new products and other updates.</p>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '<div class="page-content">\n' +
    '        <div class="row">\n' +
    '            <div class="col-md-12">\n' +
    '                <h5>SECTION 2 - CONSENT</h5>\n' +
    '                <h6>How do you get my consent?</h6>\n' +
    '                <p>When you provide us with personal information to complete a transaction, verify your credit card, place an order, arrange for a delivery or return a purchase, we imply that you consent to our collecting it and using it for that specific reason only.</p>\n' +
    '                <p>If we ask for your personal information for a secondary reason, like marketing, we will either ask you directly for your expressed consent, or provide you with an opportunity to say no.</p>\n' +
    '                <h6>How do I withdraw my consent?</h6>\n' +
    '                <p>If after you opt-in, you change your mind, you may withdraw your consent for us to contact you, for the continued collection, use or disclosure of your information, at anytime, by contacting us at thetribe@taskoli.com or mailing us at: taskoli 203-611 admirals rd., Victoria, BC, V9A 2N6, Canada</p>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '<div class="page-content">\n' +
    '    <div class="row">\n' +
    '        <div class="col-md-12">\n' +
    '            <h5>SECTION 3 - DISCLOSURE</h5>\n' +
    '            <p>We may disclose your personal information if we are required by law to do so or if you violate our Terms of Service.</p>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '<div class="page-content">\n' +
    '        <div class="row">\n' +
    '            <div class="col-md-12">\n' +
    '                <h5>SECTION 4 - TASKOLI</h5>\n' +
    '                <p>Our site is hosted on Amazon.  Your data is stored through Amazons data storage, and databases. They store your data on a secure server behind a firewall.</p>\n' +
    '                <p>For more insight, you may also want to read Taskoli\'s Terms of Service here.</p>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div> \n' +
    '    <div class="page-content">\n' +
    '            <div class="row">\n' +
    '                <div class="col-md-12">\n' +
    '                    <h5>SECTION 5 - THIRD-PARTY SERVICES</h5>\n' +
    '                        <p class="p1">In general, the third-party providers used by us will only collect, use and disclose your information to the extent necessary to allow them to perform the services they provide to us.</p>\n' +
    '                        <p class="p1">However, certain third-party service providers, such as payment gateways and other payment transaction processors, have their own privacy policies in respect to the information we are required to provide to them for your purchase-related transactions.</p>\n' +
    '                        <p class="p1">For these providers, we recommend that you read their privacy policies so you can understand the manner in which your personal information will be handled by these providers.</p>\n' +
    '                        <p class="p1">In particular, remember that certain providers may be located in or have facilities that are located in a different jurisdiction than either you or us. So if you elect to proceed with a transaction that involves the services of a third-party service provider, then your information may become subject to the laws of the jurisdiction(s) in which that service provider or its facilities are located.</p>\n' +
    '                        <p class="p1">As an example, if you are located in Canada and your transaction is processed by a payment gateway located in the United States, then your personal information used in completing that transaction may be subject to disclosure under United States legislation, including the Patriot Act.</p>\n' +
    '                        <p class="p1">Once you leave our website or are redirected to a third-party website or application, you are no longer governed by this Privacy Policy or our website&rsquo;s Terms of Service.</p>\n' +
    '                       \n' +
    '                        <h6>Links</h6>\n' +
    '                        <p>When you click on links on our website, they may direct you away from our site. We are not responsible for the privacy practices of other sites and encourage you to read their privacy statements.</p>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '    </div> \n' +
    '    <div class="page-content">\n' +
    '            <div class="row">\n' +
    '                <div class="col-md-12">\n' +
    '                    <h5>SECTION 6 - SECURITY</h5>\n' +
    '                    <p>To protect your personal information, we take reasonable precautions and follow industry best practices to make sure it is not inappropriately lost, misused, accessed, disclosed, altered or destroyed.</p>\n' +
    '                    <p>If you provide us with your credit card information, the information is encrypted using secure socket layer technology (SSL) and stored with a AES-256 encryption.&nbsp; Although no method of transmission over the Internet or electronic storage is 100% secure, we follow all PCI-DSS requirements and implement additional generally accepted industry standards.</p>\n' +
    '                    \n' +
    '                    <h6>Cookies</h6>\n' +
    '                    <p>Here is a list of cookies that we use. We&rsquo;ve listed them here so you can choose if you want to opt-out of cookies or not. _token, Allows Taskoli to provide you access to our website (log in).</p>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '    </div>   \n' +
    '    <div class="page-content">\n' +
    '            <div class="row">\n' +
    '                <div class="col-md-12">\n' +
    '                    <h5>SECTION 7 - AGE OF CONSENT</h5>\n' +
    '                    <p>By using this site, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.</p>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '    </div>\n' +
    '    <div class="page-content">\n' +
    '            <div class="row">\n' +
    '                <div class="col-md-12">\n' +
    '                    <h5>SECTION 8 - CHANGES TO THIS PRIVACY POLICY</h5>\n' +
    '                    <p>We reserve the right to modify this privacy policy at any time, so please review it frequently. Changes and clarifications will take effect immediately upon their posting on the website. If we make material changes to this policy, we will notify you here that it has been updated, so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we use and/or disclose it.</p>\n' +
    '                    <p>If our business is acquired or merged with another company, your information may be transferred to the new owners so that we may continue to sell services to you.</p>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '    </div>     \n' +
    '    <div class="page-content">\n' +
    '            <div class="row">\n' +
    '                <div class="col-md-12">\n' +
    '                    <h5>QUESTIONS AND CONTACT INFORMATION</h5>\n' +
    '                    <p>If you would like to: access, correct, amend or delete any personal information we have about you, register a complaint, or simply want more information contact our Privacy Compliance Officer at thetribe@taskoli.com or by mail at taskoli</p>\n' +
    '                    <p>[Re: Privacy Compliance Officer]</p>\n' +
    '                    <p>[203-611 admirals rd., Victoria, BC, V9A 2N6, Canada]</p>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '    </div>     \n' +
    '</div>');
	a.put('/frontend/pages/faq/view/faq.view.html', '<header id="alt" class="faq-page">\n' +
    '    <div class="dark-overlay"></div>\n' +
    '        <div class="wrap-content">\n' +
    '            <div class="center-content">\n' +
    '                <div class="container">\n' +
    '                    <div class="row">\n' +
    '                        <div class="col-md-7">\n' +
    '                            <h2>We\'re pretty sure you\'ll find what you\'re looking for in here...</h2>\n' +
    '                            <p>\n' +
    '                                <span class="white">However, If you still need a hand, feel free to <a ui-sref="page.contactus">contact us</a>, we\'re happy to help!</span><br>\n' +
    '                            </p>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </header>\n' +
    '\n' +
    '    <!-- Page Content -->\n' +
    '   <section id="faq-module" class="page-content">\n' +
    '        <div class="container">\n' +
    '            <div class="row">\n' +
    '                <div class="col-md-12">\n' +
    '                    <div class="faq-item">\n' +
    '                        <input id="ac-1" name="accordion-1" type="checkbox" checked="checked">\n' +
    '                        <label for="ac-1">How does Taskoli work?</label>\n' +
    '                        <article class="ac-small">\n' +
    '                            <p>\n' +
    '                              Taskoli works by providing the resources to connect people who require work/tasks to be completed with community members looking for extra income.\n' +
    '\n' +
    '                            </p>\n' +
    '                        </article>\n' +
    '                    </div>\n' +
    '                    <div class="faq-item">\n' +
    '                        <input id="ac-2" name="accordion-1" type="checkbox">\n' +
    '                        <label for="ac-2">Why should I use Taskoli?</label>\n' +
    '                        <article class="ac-medium">\n' +
    '                            <p>\n' +
    '                            Taskoli is an easy, go-to platform to get all your chores, errands, and extra assistance handled that will leave you with more free time in your daily routine.\n' +
    '                            </p>\n' +
    '                        </article>\n' +
    '                    </div>\n' +
    '                    <div class="faq-item">\n' +
    '                        <input id="ac-3" name="accordion-1" type="checkbox">\n' +
    '                        <label for="ac-3">Why should I trust Taskoli?</label>\n' +
    '                        <article class="ac-medium">\n' +
    '                            <p>\n' +
    '                               Taskoli values morality and confidence and is based around the sense of a strong, close-knit community. The founders are a few members of the Navy who are trying to provide access to a little extra help, while giving members of our community the opportunity to make money assisting those in need.\n' +
    '                            </p>\n' +
    '                        </article>\n' +
    '                    </div>\n' +
    '                    <div class="faq-item">\n' +
    '                        <input id="ac-4" name="accordion-1" type="checkbox">\n' +
    '                        <label for="ac-4">How much does Taskoli cost?</label>\n' +
    '                        <article class="ac-medium">\n' +
    '                            <p>\n' +
    '                              Taskoli is completely free to all people posting tasks, and all people looking for work. \n' +
    '                            </p>\n' +
    '                        </article>\n' +
    '                    </div>\n' +
    '                    <div class="faq-item">\n' +
    '                        <input id="ac-5" name="accordion-1" type="checkbox">\n' +
    '                        <label for="ac-5">Will the Tasker be who they say they are?</label>\n' +
    '                        <article class="ac-medium">\n' +
    '                            <p>\n' +
    '                              All members of Taskoli are required to sign up and login with Facebook or Google+. Taskers and Employers are members of your community that can easily be verified through their profiles.\n' +
    '                            </p>\n' +
    '                        </article>\n' +
    '                    </div>\n' +
    '                    <div class="faq-item">\n' +
    '                        <input id="ac-6" name="accordion-1" type="checkbox">\n' +
    '                        <label for="ac-6">Will Taskoli post on my Facebook? </label>\n' +
    '                        <article class="ac-medium">\n' +
    '                            <p>\n' +
    '                              No, Taskoli will not post on your Facebook. However, we do appreciate and encourage you to like and follow our Facebook page to ensure that we can spread knowledge of our services in the community. We will do our best to reply to all comments and questions on our Facebook page in a timely manner.\n' +
    '                            </p>\n' +
    '                        </article>\n' +
    '                    </div>\n' +
    '                    <div class="faq-item">\n' +
    '                        <input id="ac-7" name="accordion-1" type="checkbox">\n' +
    '                        <label for="ac-7">Will Taskoli share or sell my information?</label>\n' +
    '                        <article class="ac-medium">\n' +
    '                            <p>\n' +
    '                              Under no circumstance will Taskoli sell or share any customer information. Taskoli may only disclose your personal information to the extent that it is required to do so by law, in connection with any legal proceedings or prospective legal proceedings, and in order to establish, exercise or defend its legal rights.\n' +
    '                            </p>\n' +
    '                        </article>\n' +
    '                    </div>\n' +
    '                    \n' +
    '                    <div class="faq-item">\n' +
    '                        <input id="ac-8" name="accordion-1" type="checkbox">\n' +
    '                        <label for="ac-8">How can I pay the Tasker?</label>\n' +
    '                        <article class="ac-medium">\n' +
    '                            <p>\n' +
    '                                You can pay the tasker with cash, paypal, or stripe.\n' +
    '                            </p>\n' +
    '                        </article>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div class="faq-item">\n' +
    '                        <input id="ac-9" name="accordion-1" type="checkbox">\n' +
    '                        <label for="ac-9">Are Taskers employees of Taskoli?</label>\n' +
    '                        <article class="ac-medium">\n' +
    '                            <p>\n' +
    '                              No, Taskoli is merely an organization that helps bring employers and taskers together. Taskers are members of your community looking for extra work.\n' +
    '                            </p>\n' +
    '                        </article>\n' +
    '                    </div>\n' +
    '\n' +
    '\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </section>\n' +
    '\n' +
    '    <section id="support" class="page-content">\n' +
    '        <div class="overlay-black"></div>\n' +
    '        <div class="container">\n' +
    '            <div class="row">\n' +
    '                <div class="col-md-12 text-center">\n' +
    '                    <h1 class="text-uppercase">Our story</h1>\n' +
    '                    <p class="head-lead">Find more about what we do!</p>\n' +
    '                    <p>&nbsp;</p>\n' +
    '                    <a ui-sref="page.about" class="btn btn-white btn-lg">Discover</a>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </section>\n' +
    '\n' +
    '    <section id="cta" class="page-content">\n' +
    '        <div class="container">\n' +
    '            <div class="row">\n' +
    '                <div class="col-md-12 text-center">\n' +
    '                    <h3 class="text-uppercase">BROWSE FOR WORK</h3>\n' +
    '                    <br>\n' +
    '                    <a ui-sref="tasks" class="btn btn-primary btn-lg">Explore</a>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </section>');
	a.put('/frontend/pages/how-it-works/view/how-it-works.view.html', '<!-- Page Content -->\n' +
    '<header id="alt" class="how-page">\n' +
    '        <div class="dark-overlay"></div>\n' +
    '        <div class="wrap-content">\n' +
    '            <div class="center-content">\n' +
    '                <div class="container">\n' +
    '                    <div class="row">\n' +
    '                        <div class="col-md-7">\n' +
    '                            <h2>Need some help with a job?</h2>\n' +
    '                            <p class="white">\n' +
    '                                <span class="white">Find the right person for the job here.</span><br>\n' +
    '                                With <a ui-sref="home"><b>Taskoli</b></a> you can get local help with you task within minutes!\n' +
    '                            </p>\n' +
    '                            <br>\n' +
    '                               <p class="white">Click TASK-IT-OUT anytime !!!</p>\n' +
    '                          \n' +
    '                                <!--<a href="#" class="btn btn-primary btn-lg login_popup">Post a Task</a>-->\n' +
    '                          \n' +
    '                            \n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </header>\n' +
    '<main id="how-it-works">\n' +
    '    <section id="step-1" class="page-content">\n' +
    '        <div class="container">\n' +
    '            <div class="row">\n' +
    '                <div class="col-md-7 col-md-push-5 margin-top-fix">\n' +
    '                    <h3><b>How It Works?</b></h3>\n' +
    '                    <br>\n' +
    '                    <p>\n' +
    '                        Taskoli\'s innovative bidding system allows you to gain back your personal time while saving you money. You don’t have to\n' +
    '                        spend time composing a well thought out email to reach out to a potential employer, all you have\n' +
    '                        to do is make an offer on a task. And posting a task is only a click away!\n' +
    '                    </p>\n' +
    '                    <br>\n' +
    '\n' +
    '                    <h3><b>Signing Up</b></h3>\n' +
    '                    <br>\n' +
    '\n' +
    '                    <ul class="module-list">\n' +
    '                        <li>A new window will open allowing you to create a profile by simply signing up with Facebook&reg; or\n' +
    '                            Google+&reg;.</li>\n' +
    '                        <li>Now you can click \'login\' and choose to login with Facebook or Google+.</li>\n' +
    '                        <li>Clicking on the Taskoli icon in the top left corner will direct you back to the home page.</li>\n' +
    '                    </ul>\n' +
    '                </div>\n' +
    '                <div class="col-md-5 col-md-pull-7">\n' +
    '                    <img src="/content/img/idea-business-man.png" width="200" class="business-man img-responsive center-block">\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </section>\n' +
    '\n' +
    '    <section id="step-2" class="page-content grey-shade">\n' +
    '        <div class="container">\n' +
    '            <div class="row">\n' +
    '                <div class="col-md-6">\n' +
    '                    <h3><b>How to Post a Task</b></h3>\n' +
    '                    <br>\n' +
    '\n' +
    '                    <ul class="module-list">\n' +
    '                        <li>To post a task, go to the home page and click the "Post a task" icon or click on any of the category\n' +
    '                            options located below and your task will be posted within that category.</li>\n' +
    '                        <li>Fill in all the text boxes on the "Post a task" page. Please give as many details as possible about\n' +
    '                            your task and what you expect to be done. Choose the time and date you wish your task to be completed\n' +
    '                            by. Then go ahead and \'hire\' one of the taskers that have made an offer on your task to assign\n' +
    '                            them the task.</li>\n' +
    '                    </ul>\n' +
    '\n' +
    '                </div>\n' +
    '                <div class="col-md-6">\n' +
    '                    <img src="/content/img/window.png" class="window-screen">\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </section>\n' +
    '\n' +
    '    <section id="step-3" class="page-content">\n' +
    '        <div class="container">\n' +
    '            <div class="row">\n' +
    '                <div class="col-md-6">\n' +
    '                    <div class="overlay-module">\n' +
    '                        <img src="/content/img/send_message.png" class="comp-screen module-static">\n' +
    '                        <img src="/content/img/send_message.gif" class="comp-screen module-animated">\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="col-md-6">\n' +
    '                    <h3><b>How to make an offer on a Task</b></h3>\n' +
    '                    <br>\n' +
    '\n' +
    '                    <ul class="module-list">\n' +
    '                        <li>To make an offer on a task you would like to complete, click the \'check it out\' button or \'view task\'\n' +
    '                            button and then fill out the \'your offer\' fields on the right side of the screen. Fill out your\n' +
    '                            offer price and a quick message to the emploter.</li>\n' +
    '                        <li>Then click the "submit" button to make an offer on this task. Please note that you can only make\n' +
    '                            one offer per task.</li>\n' +
    '                    </ul>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <br><br><br><br><br><br>\n' +
    '        </div>\n' +
    '    </section>\n' +
    '\n' +
    '    <section id="step-2" class="page-content grey-shade">\n' +
    '        <div class="container">\n' +
    '            <div class="row">\n' +
    '                <div class="col-md-6">\n' +
    '                    <h3><b>Asking questions before making an offer on a Task.</b></h3>\n' +
    '                    <br>\n' +
    '\n' +
    '                    <ul class="module-list">\n' +
    '                        <li>To ask a question before making an offer on a task, scroll down to the bottom of the \'Task Overview\'\n' +
    '                            page. Write your question in the field and click \'Send\'.</li>\n' +
    '\n' +
    '                    </ul>\n' +
    '\n' +
    '                </div>\n' +
    '                <div class="col-md-6">\n' +
    '                    <img src="/content/img/window.png" class="window-screen">\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </section>\n' +
    '\n' +
    '\n' +
    '    <section id="support" class="page-content">\n' +
    '        <div class="overlay-black"></div>\n' +
    '        <div class="container">\n' +
    '            <div class="row">\n' +
    '                <div class="col-md-12 text-center">\n' +
    '                    <h1 class="text-uppercase">Support</h1>\n' +
    '                    <p class="head-lead">Need any help? Contact us below.</p>\n' +
    '                    <p>&nbsp;</p>\n' +
    '                    <a ng-href="/page/contactus" class="btn btn-white btn-lg">Drop us a line</a>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </section>\n' +
    '\n' +
    '    <section id="cta" class="page-content">\n' +
    '        <div class="container">\n' +
    '            <div class="row">\n' +
    '                <div class="col-md-12 text-center">\n' +
    '                    <h3 class="text-uppercase">Browse for services</h3>\n' +
    '                    <br>\n' +
    '                    <a ui-sref="tasks" class="btn btn-primary btn-lg" ui-sref="tasks">Explore</a>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </section>\n' +
    '</main>');
	a.put('/frontend/pages/contactus/view/contactus.view.html', '<header id="alt" class="contact-page">\n' +
    '    <div class="wrap-content">\n' +
    '        <div class="center-content">\n' +
    '            <div class="container">\n' +
    '                <div class="row">\n' +
    '                    <div class="col-md-6">\n' +
    '                        <h2>How Can We Help?</h2>\n' +
    '                        <p>\n' +
    '                            <span class="white">Have an issue? Contact out team so we can help. Submit the form below and we will contact you as soon as possible.</span>\n' +
    '                        </p>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</header>\n' +
    '\n' +
    '<!-- Page Content -->\n' +
    '<section class="page-content grey-shade contact-form">\n' +
    '    <div class="container">\n' +
    '        <div class="row">\n' +
    '            <div class="col-md-6 col-md-push-6">\n' +
    '                <div class="contact-wrapper">\n' +
    '                    <div class="form-box">\n' +
    '\n' +
    '                        <!--<?php $attributes = array("method" => "post", "name" => "contactform");\n' +
    '                            echo form_open("pages/contact_action", $attributes);?>-->\n' +
    '                        <div class="form-group">\n' +
    '                            <label for="subject">Describe the problem you are having</label>\n' +
    '                            <input type="text" class="form-control" name="subject" placeholder="Subject" required="">\n' +
    '                        </div>\n' +
    '                        <div class="form-group">\n' +
    '                            <label for="message">Give us more details</label>\n' +
    '                            <textarea class="form-control" name="message" placeholder="" rows="6" required=""></textarea>\n' +
    '                        </div>\n' +
    '                        <div class="form-group">\n' +
    '                            <label for="fullname">Full Name</label>\n' +
    '                            <!--<input type="text" value="<?php echo $this->session->userdata(\'user_fullname\') ?>" class="form-control" name="fullname" placeholder="Your Name" required disabled />-->\n' +
    '                            <input type="text" value="" class="form-control" name="fullname" placeholder="Your Name" required="">\n' +
    '                        </div>\n' +
    '                        <div class="form-group">\n' +
    '                            <label for="email">Email Address</label>\n' +
    '                            <!--<input type="email" class="form-control" value="<?php echo $this->session->userdata(\'user_email\') ?>" name="email" placeholder="Your Email Address" required disabled />-->\n' +
    '                            <input type="email" class="form-control" value="" name="email" placeholder="Your Email Address" required="">\n' +
    '                        </div>\n' +
    '                        <div class="form-group text-right">\n' +
    '                            <md-button class="md-raised md-primary">Submit</md-button>\n' +
    '                        </div>\n' +
    '                        <!--<?php echo form_close(); ?>-->\n' +
    '\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div class="col-md-6 col-md-pull-6">\n' +
    '                <h6>Should you have any questions about Taskoli, You can reach us at:\n' +
    '                </h6>\n' +
    '                <br>\n' +
    '                <p>\n' +
    '                    <i class="fa fa-envelope" aria-hidden="true"></i> <a href="mailto:thetribe@taskoli.com">thetribe@taskoli.com</a>\n' +
    '                </p>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</section>\n' +
    '\n' +
    '<section id="support" class="page-content">\n' +
    '    <div class="overlay-black"></div>\n' +
    '    <div class="container">\n' +
    '        <div class="row">\n' +
    '            <div class="col-md-12 text-center">\n' +
    '                <h1 class="text-uppercase">Our story</h1>\n' +
    '                <p class="head-lead">Find more about what we do!</p>\n' +
    '                <p>&nbsp;</p>\n' +
    '                <a ng-href="/page/about" class="btn btn-white btn-lg">Discover</a>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</section>\n' +
    '\n' +
    '<section id="cta" class="page-content">\n' +
    '    <div class="container">\n' +
    '        <div class="row">\n' +
    '            <div class="col-md-12 text-center">\n' +
    '                <h3 class="text-uppercase">Browse for services</h3>\n' +
    '                <br>\n' +
    '                <a ui-sref="tasks" class="btn btn-primary btn-lg">Explore</a>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</section>');
	a.put('/frontend/pages/about/view/about.view.html', '<header id="alt" class="about-page">\n' +
    '    <div class="dark-overlay"></div>\n' +
    '    <!-- Navigation -->\n' +
    '    <div class="wrap-content">\n' +
    '        <div class="center-content">\n' +
    '            <div class="container">\n' +
    '                <div class="col-md-12 text-center">\n' +
    '                    <h1>About Us</h1>\n' +
    '                    <p class="head-lead">Learn more about the makers</p>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</header>\n' +
    '<main id="aboutUs">\n' +
    '    <!-- Page Content -->\n' +
    '    <section class="page-content bg-shade">\n' +
    '        <div class="container">\n' +
    '            <div class="row">\n' +
    '                <div class="col-md-12">\n' +
    '                    <div class="section_title"><div class="section_title_text"><h2 class="text-uppercase">What we do</h2></div><hr></div>\n' +
    '                    <br>\n' +
    '                </div>\n' +
    '                <p>&nbsp;</p>\n' +
    '                <div class="col-md-4 text-center what_we_do">\n' +
    '                    <img src="/content/img/about_process/searching.svg" width="215" class="img-responsive center-block">\n' +
    '                    <br><br>\n' +
    '                    <h6><b>Take care of your tasks</b></h6>\n' +
    '                    <br>\n' +
    '                    <p>Taskoli is an organization that understand that time and money are valuable to everyone. Our vision for the future is to help direct individual lifestyles to a place where people are able to earn extra money in a way that fits their busy schedule. Taskoli is a great fit for everyone whether you are a student, busy parent, in between jobs, or simply looking to make some extra money.</p>\n' +
    '                </div>\n' +
    '                <div class="col-md-4 text-center what_we_do">\n' +
    '                    <img src="/content/img/about_process/find.svg" width="215" class="img-responsive center-block">\n' +
    '                    <br><br>\n' +
    '                    <h6><b>With help from your Neighbours</b></h6>\n' +
    '                    <br>\n' +
    '                    <p>Our company strives to use the principle of working within the community to bring people together to achieve a practical way to work with others. This process is a simple yet effective way to bring freedom and adjustability to everyday life. Our easy to use platform was developed to satisfy both parties’ needs and to create a tight-knit community among those who are able to benefit from each other.</p>\n' +
    '                </div>\n' +
    '                <div class="col-md-4 text-center what_we_do">\n' +
    '                    <img src="/content/img/about_process/relax.svg" width="215" class="img-responsive center-block">\n' +
    '                    <br><br>\n' +
    '                    <h6><b>So You Can Relax</b></h6>\n' +
    '                    <br>\n' +
    '                    <p>We at Taskoli are committed to continuously improving our standards in order to satisfy the needs and goals of the community. We are always open to suggestions on how to make Taskoli work better. Please feel free to send us a message under the ‘Contact Us’ option; we are happy to hear from you. We hope to hear from you soon and thank you for using Taskoli.</p>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </section>\n' +
    '\n' +
    '    <section id="makers" class="page-content">\n' +
    '        <div class="container">\n' +
    '            <div class="row">\n' +
    '                <div class="col-md-12">\n' +
    '                    <div class="section_title"><div class="section_title_text"><h2 class="text-uppercase">MEET THE FOUNDERS</h2></div><hr></div>\n' +
    '                    <br>\n' +
    '                </div>\n' +
    '                <div class="col-md-12">\n' +
    '                    <p>The idea of Taskoli started in a coffee shop in downtown Victoria BC, in 2015. Sonny and Josh the co-founders, were enjoying a cup of coffee after work which didn\'t happen often due to their busy schedules. Josh said that he wasn’t able to stay long because he had a couple or errands to run before the stores closed. Jokingly, Sonny replied with, "Wouldn\'t it be nice if those errands could be done for you?"</p>\n' +
    '\n' +
    '                    <p>Then, it dawned on them. </p>\n' +
    '                    \n' +
    '                    <p>What if they could create a service that would allow users to take back the time that they had already allotted in their busy schedules?</p>\n' +
    '\n' +
    '                    <p>And that\'s exactly what Sonny and Josh did. <br>\n' +
    '                    They created Taskoli; a thoughtfully developed program that is simple and easy to use, designed to help free up time in your busy schedule. Sonny and Josh want to help you worry less about your “to-do” list, and start living your “can-do” list.\n' +
    '                    </p>\n' +
    '                    \n' +
    '                    <p>“Hey, my name is Sonny. I love motorcycles and just recently bought a used KLR. What I didn’t know at the time of purchase was that the wiring harness needed to be worked on and fixed, I don\'t possess the skills or knowledge to fix this. I thought it would be helpful if I was able to hire someone from my community who had the knowledge and experience that I lacked, that would be able to help work on my bike for a lower price than a mechanical shop would cost. I imagined this would be the perfect task for a student electrician or a retired mechanic who may be looking to make a little extra money. So, with the help of my friend, we worked together to build this company.”</p>\n' +
    '\n' +
    '                    <p>“Hi, I’m Josh and I have only lived in Victoria for a couple of years. Moving from Nova Scotia, there were a lot of moving expenses that I did not initially anticipate. I had always considered looking for a small side job to earn some extra money to help cover the costs of moving, but there was never anything that seemed to work around my schedule. With the teamwork of my friend Sonny, we worked hard to create Taskoli and make this possibility a reality.”</p>\n' +
    '\n' +
    '                </div>\n' +
    '        </div>\n' +
    '    </div></section>\n' +
    '\n' +
    '    <section id="support" class="page-content">\n' +
    '        <div class="overlay-black"></div>\n' +
    '        <div class="container">\n' +
    '            <div class="row">\n' +
    '                <div class="col-md-12 text-center">\n' +
    '                    <h1 class="text-uppercase">Support</h1>\n' +
    '                    <p class="head-lead">Need any help? Contact us below.</p>\n' +
    '                    <p>&nbsp;</p>\n' +
    '                    <a ng-href="/page/contactus" class="btn btn-white btn-lg">Drop us a line</a>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </section>\n' +
    '\n' +
    '    <section id="cta" class="page-content">\n' +
    '        <div class="container">\n' +
    '            <div class="row">\n' +
    '                <div class="col-md-12 text-center">\n' +
    '                    <h3 class="text-uppercase">Browse for services</h3>\n' +
    '                    <br>\n' +
    '                    <a ui-sref="tasks" class="btn btn-primary btn-lg">Explore</a>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </section>\n' +
    '</main>');
	a.put('/frontend/mytask/task_completed/view/task_completed_as_tasker.html', '<!-- Modal content-->\n' +
    '<div class="askAquestion" id="task_completed_as_tasker">\n' +
    '  <form class="form-horizontal" method="post" accept-charset="utf-8" name="rating">\n' +
    '    <div class="user_info col-md-4">\n' +
    '      <a href="#">\n' +
    '        <img fallback-src="{{fallbackImage}}" ng-src="{{taskdata.user_image}}" alt="User Image">\n' +
    '      </a>\n' +
    '      <input type="hidden" name="user_id" ng-model="taskdata.current_user_id" ng-init="taskdata.current_user_id=current_user_id">\n' +
    '      <input type="hidden" name="awarded_to" ng-model="taskdata.awarded_to" ng-init="taskdata.awarded_to=awarded_to">\n' +
    '      <span>\n' +
    '        <a ui-sref="profile({id: taskdata.employer_id})">{{taskdata.name}}</a>\n' +
    '      </span>\n' +
    '    </div>\n' +
    '    <div class="chat_submit_btn col-md-8">\n' +
    '      <div class="col-md-12 no-padding title">\n' +
    '        <h6 class="col-md-10 no-pad-left pull-left" id="ques_task_title">{{taskdata.task_title}}</h6>\n' +
    '        <a class="btn btn-default col-md-2 pull-right budget">${{taskdata.task_budget}}</a>\n' +
    '      </div>\n' +
    '      <div class="col-md-10 no-pad-left" id="actions_tabs">\n' +
    '        <md-stepper on-finish="finishedWizard()" id="completed" md-linear="true" md-alternative="false" md-vertical="false" md-direction="bottom">\n' +
    '          <md-step md-label="Payment">\n' +
    '            <md-step-body>\n' +
    '              <!-- {{NotificationData}}-->\n' +
    '              <div ng-if="NotificationData == \'\'">Waiting For Payment </div>\n' +
    '              <span ng-if="NotificationData != \'\'">Employer name: {{NotificationData[0].name}}</span>\n' +
    '              <br>\n' +
    '              <span ng-if="NotificationData != \'\'">Task Budget: {{NotificationData[0].amount}}</span>\n' +
    '              <br>\n' +
    '              <span ng-if="NotificationData != \'\'">Payment Type: {{NotificationData[0].payment_type}}</span>\n' +
    '            </md-step-body>\n' +
    '            <md-step-actions>\n' +
    '              <div class="accept_reject text-right col-md-12">\n' +
    '                <a class="btn btn-default confirm done" ng-disabled="!NotificationData[0]" ng-click="exitStep1()">Next</a>\n' +
    '                <a class="btn btn-danger md-red reject done" ng-disabled="!NotificationData[0]" ng-click="closeModal()">Cancel</a>\n' +
    '              </div>\n' +
    '            </md-step-actions>\n' +
    '          </md-step>\n' +
    '          <md-step md-label="Rating">\n' +
    '              <md-step-body>\n' +
    '            <span id="user_rating" uib-rating="" ng-model="taskdata.rate" max="5" titles="ratingTitle" read-only="false" on-leave="overStar = null" aria-labelledby="default-rating"></span>\n' +
    '            <textarea class="form-control" ng-model="taskdata.review" name="" id="" cols="30" rows="10" required=""></textarea>\n' +
    '            </md-step-body>\n' +
    '            <md-step-actions class="text-right">\n' +
    '                <a class="btn btn-default complete_transaction" ng-click="DoneTask(\'tasker\')" ng-disabled="rating.$invalid || (taskdata.rate <= 0 || !taskdata.rate)">Complete Transaction</a>\n' +
    '            </md-step-actions>\n' +
    '          </md-step>\n' +
    '          </md-stepper>\n' +
    '      </div>\n' +
    '      <div class="col-md-2 no-pad-right no-padding">\n' +
    '          <a class="btn btn-default send_message" ui-sref="message({id: taskdata.id})" ui-sref-opts="{reload: true }" ng-click="closeModal()">Message</a>\n' +
    '      </div>\n' +
    '  </div></form>\n' +
    '  </div>');
	a.put('/frontend/mytask/task_completed/view/task_completed_as_tasker 2.html', '<!-- Modal content-->\n' +
    '<div class="askAquestion" id="task_completed_as_tasker">\n' +
    '  <form class="form-horizontal" method="post" accept-charset="utf-8" name="rating">\n' +
    '    <div class="user_info col-md-4">\n' +
    '      <a href="#">\n' +
    '        <img fallback-src="{{fallbackImage}}" ng-src="{{taskdata.user_image}}" alt="User Image">\n' +
    '      </a>\n' +
    '      <input type="hidden" name="user_id" ng-model="taskdata.current_user_id" ng-init="taskdata.current_user_id=current_user_id">\n' +
    '      <input type="hidden" name="awarded_to" ng-model="taskdata.awarded_to" ng-init="taskdata.awarded_to=awarded_to">\n' +
    '      <span>\n' +
    '        <a ui-sref="profile({id: taskdata.employer_id})">{{taskdata.name}}</a>\n' +
    '      </span>\n' +
    '    </div>\n' +
    '    <div class="chat_submit_btn col-md-8">\n' +
    '      <div class="col-md-12 no-padding title">\n' +
    '        <h6 class="col-md-10 no-pad-left pull-left" id="ques_task_title">{{taskdata.task_title}}</h6>\n' +
    '        <a class="btn btn-default col-md-2 pull-right budget">${{taskdata.task_budget}}</a>\n' +
    '      </div>\n' +
    '      <div class="col-md-10 no-pad-left" id="actions_tabs">\n' +
    '        <md-stepper on-finish="finishedWizard()" id="completed" md-linear="true" md-alternative="false" md-vertical="false" md-direction="bottom">\n' +
    '          <md-step md-label="Payment">\n' +
    '            <md-step-body>\n' +
    '              <!-- {{NotificationData}}-->\n' +
    '              <div ng-if="NotificationData == \'\'">Waiting For Payment </div>\n' +
    '              <span ng-if="NotificationData != \'\'">Employer name: {{NotificationData[0].name}}</span>\n' +
    '              <br>\n' +
    '              <span ng-if="NotificationData != \'\'">Task Budget: {{NotificationData[0].amount}}</span>\n' +
    '              <br>\n' +
    '              <span ng-if="NotificationData != \'\'">Payment Type: {{NotificationData[0].payment_type}}</span>\n' +
    '            </md-step-body>\n' +
    '            <md-step-actions>\n' +
    '              <div class="accept_reject text-right col-md-12">\n' +
    '                <a class="btn btn-default confirm done" ng-disabled="!NotificationData[0]" ng-click="exitStep1()">Next</a>\n' +
    '                <a class="btn btn-danger md-red reject done" ng-disabled="!NotificationData[0]" ng-click="closeModal()">Cancel</a>\n' +
    '              </div>\n' +
    '            </md-step-actions>\n' +
    '          </md-step>\n' +
    '          <md-step md-label="Rating">\n' +
    '              <md-step-body>\n' +
    '            <span id="user_rating" uib-rating="" ng-model="taskdata.rate" max="5" titles="ratingTitle" read-only="false" on-leave="overStar = null" aria-labelledby="default-rating"></span>\n' +
    '            <textarea class="form-control" ng-model="taskdata.review" name="" id="" cols="30" rows="10" required=""></textarea>\n' +
    '            </md-step-body>\n' +
    '            <md-step-actions class="text-right">\n' +
    '                <a class="btn btn-default complete_transaction" ng-click="DoneTask(\'tasker\')" ng-disabled="rating.$invalid || (taskdata.rate <= 0 || !taskdata.rate)">Complete Transaction</a>\n' +
    '            </md-step-actions>\n' +
    '          </md-step>\n' +
    '          </md-stepper>\n' +
    '      </div>\n' +
    '      <div class="col-md-2 no-pad-right no-padding">\n' +
    '          <a class="btn btn-default send_message" ui-sref="message({id: taskdata.id})" ui-sref-opts="{reload: true }" ng-click="closeModal()">Message</a>\n' +
    '      </div>\n' +
    '  </div></form>\n' +
    '  </div>');
	a.put('/frontend/mytask/task_completed/view/task_completed_as_employer.html', '<!-- Modal content-->\n' +
    '<div class="askAquestion" id="task_completed_as_tasker">\n' +
    '  <form class="form-horizontal" method="post" accept-charset="utf-8" name="review">\n' +
    '    <div class="col-md-4 user_info">\n' +
    '      <a href="#">\n' +
    '        <img fallback-src="{{fallbackImage}}" ng-src="{{taskdata.user_image}}" alt="User Image">\n' +
    '      </a>\n' +
    '      <input type="hidden" name="user_id" ng-model="taskdata.current_user_id" ng-init="taskdata.current_user_id=current_user_id">\n' +
    '      <input type="hidden" name="awarded_to" ng-model="taskdata.awarded_to" ng-init="taskdata.awarded_to=awarded_to">\n' +
    '      <input type="hidden" name="check_payment" ng-model="taskdata.check_payment" ng-init="taskdata.check_payment=payment_type">\n' +
    '      <span>\n' +
    '        <a ui-sref="profile({id: taskdata.employer_id})">{{taskdata.name}}</a>\n' +
    '      </span>\n' +
    '    </div>\n' +
    '    <div class="col-md-8">\n' +
    '      <div class="col-md-12 title no-padding">\n' +
    '        <h6 class="col-md-10 no-pad-left pull-left" id="ques_task_title">{{taskdata.task_title}}</h6>\n' +
    '        <a class="btn btn-default col-md-2 pull-right budget">${{taskdata.task_budget}}</a>\n' +
    '      </div>\n' +
    '      <div class="col-md-10 no-pad-left" id="actions_tabs">\n' +
    '        <md-stepper id="completed" md-linear="true" md-alternative="false" md-vertical="false" md-direction="bottom">\n' +
    '          <md-step md-label="Payment">\n' +
    '            <md-step-body>\n' +
    '              <div class="task_status done" ng-init="taskdata.paymentModel = \'Cash\'">\n' +
    '                <label ng-model="taskdata.paymentModel" uib-btn-radio="\'Cash\'">Cash</label>\n' +
    '                <label ng-model="taskdata.paymentModel" uib-btn-radio="\'Paypal\'">Paypal</label>\n' +
    '              </div>\n' +
    '            </md-step-body>\n' +
    '            <md-step-actions>\n' +
    '              <div class="accept_reject text-right col-md-12">\n' +
    '                <a class="btn btn-default confirm done" ng-click="exitStepOne()" ng-diabled="taskdata.paymentModel == \'\'">{{BtnValue}}</a>\n' +
    '                <a ng-if="BtnShow == \'show\'" class="btn btn-danger md-red reject" ng-click="rejecttask(taskdata, \'lg\')">Reject</a>\n' +
    '              </div>\n' +
    '            </md-step-actions>\n' +
    '          </md-step>\n' +
    '          <md-step md-label="Rating">\n' +
    '            <md-step-body>\n' +
    '              <span id="user_rating" uib-rating="" ng-model="taskdata.rate" max="5" titles="ratingTitle" read-only="false" on-leave="overStar = null" aria-labelledby="default-rating"></span>\n' +
    '              <textarea class="form-control" ng-model="taskdata.review" name="" id="" cols="30" rows="10" required=""></textarea>\n' +
    '            </md-step-body>\n' +
    '            <md-step-actions class="text-right">\n' +
    '              <a class="btn btn-default complete_transaction" ng-click="DoneTask(\'employer\', taskdata)" ng-disabled="review.$invalid || (taskdata.rate <= 0 || !taskdata.rate)">Complete Transaction</a>\n' +
    '            </md-step-actions>\n' +
    '          </md-step>\n' +
    '        </md-stepper>\n' +
    '      </div>\n' +
    '      <div class="col-md-2 no-pad-right no-padding">\n' +
    '          <a class="btn btn-default send_message" ui-sref="message({id: taskdata.id})" ui-sref-opts="{reload: true }" ng-click="closeModal()">Message</a>\n' +
    '      </div>\n' +
    '      </div>\n' +
    '  </form>\n' +
    '  </div>');
	a.put('/frontend/mytask/task_completed/view/task_as_complete.html', '<!-- Modal content-->\n' +
    '<div class="askAquestion" id="task_completed_as_tasker">\n' +
    '        <form class="form-horizontal" method="post">\n' +
    '          <div class="user_info"> \n' +
    '            <a href="#"><img fallback-src="{{fallbackImage}}" ng-src="{{taskdata.user_image}}" alt="User Image"></a>\n' +
    '            <span id="user_rating" class="col-md-12 no-padding" uib-rating="" ng-model="taskdata.rating" titles="ratingTitle" max="5" read-only="true" on-leave="overStar = null" aria-labelledby="default-rating"></span>\n' +
    '\n' +
    '            <span><a>{{taskdata.name}}</a></span> \n' +
    '          </div>\n' +
    '          <div class="chat_submit_btn">\n' +
    '            <div class="col-md-12 no-padding title">\n' +
    '              <h6 class="col-md-10 no-pad-left pull-left" id="ques_task_title">{{taskdata.task_title}}</h6>\n' +
    '              <a class="btn btn-default col-md-2 pull-right budget">${{taskdata.task_budget}}</a>\n' +
    '            </div>\n' +
    '            <div class="col-md-10 no-pad-left no-padd-left">\n' +
    '              <p>{{taskdata.task_description}}</p>\n' +
    '            </div>\n' +
    '            <div class="col-md-2 no-pad-right no-padding">\n' +
    '              <a class="btn btn-default col-md-12 send_message" ng-click="sendMessage(taskdata.user_id, \'lg\')">Message</a>\n' +
    '              <a class="btn btn-default col-md-12" ng-click="directionToggle()">Directions</a>\n' +
    '            </div>\n' +
    '\n' +
    '            <!--<div class="col-sm-12 no-padding progress_bar"><uib-progressbar value="25"></uib-progressbar></div>-->\n' +
    '\n' +
    '            <div class="col-md-12 no-padding mark_completed">\n' +
    '              <div class="col-md-10 no-pad-left no-pad-left text-right">\n' +
    '                <!--Mark this Task as -->\n' +
    '              </div>\n' +
    '              <div class="col-md-2 no-pad-right no-padding">\n' +
    '                <a class="btn btn-default col-md-12" ng-click="completeTaskAsTasker(taskdata.id,taskdata.user_id)">Completed</a>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '\n' +
    '          </div>\n' +
    '\n' +
    '          <div ng-if="directiontoggle" class="col-md-12 no-padding show_map">\n' +
    '            <ng-map zoom="10" center="{{taskdata.location}}">\n' +
    '              <directions draggable="false" panel="directions-panel" travel-mode="DRIVING" origin="{{taskdata.location}}" destination="{{mapdata.lat}},{{mapdata.lng}}">\n' +
    '              </directions>\n' +
    '              \n' +
    '            </ng-map>\n' +
    '          </div>\n' +
    '          </form>\n' +
    '</div>');
	a.put('/frontend/mytask/task_completed/view/reject_task.html', '<!-- Modal -->\n' +
    '<div id="sendMessage" role="dialog">\n' +
    '  <ng-form novalidate="" name="rejectForm">\n' +
    '    <div class="modal-header">\n' +
    '      <h4>Why You Are Reject this task?</h4>\n' +
    '    </div>\n' +
    '    <div class="modal-body col-md-12">\n' +
    '      <textarea class="form-control" ng-model="rejectData.chat_text" name="chat_text" placeholder="why your are reject this task" onkeydown="if (event.keyCode == 13) { this.form.submit(); return false; }" required=""></textarea>\n' +
    '      <input type="hidden" ng-model="rejectData.task_id" name="task_id" ng-init="rejectData.task_id=taskdata.id">\n' +
    '      <input type="hidden" ng-model="rejectData.owner" name="owner" ng-init="rejectData.owner=taskdata.tasker_id">\n' +
    '    </div>\n' +
    '    <div class="modal-footer">\n' +
    '      <md-button class="md-raised" ng-click="cancel()">\n' +
    '        <i class="fa fa-chevron-left" aria-hidden="true"></i> Back</md-button>\n' +
    '      <md-button class="md-raised md-primary" ng-click="reject_task(rejectData)" ng-disabled="rejectForm.$invalid">Send</md-button>\n' +
    '    </div>\n' +
    '  </ng-form>\n' +
    '</div>');
	a.put('/frontend/mytask/tasker/view/tasker.html', '<!-- Modal My Task Popup -->\n' +
    '<div id="my_task_popup" role="dialog" class="global-modal">\n' +
    '  <!-- Modal content-->\n' +
    '  <div class="modal-content">\n' +
    '    <div class="modal-body">\n' +
    '      <!-- Tasks Detail  -->\n' +
    '      <div class="col-md-6 no-pad-left" id="task_detail" ng-if="taskdata">\n' +
    '        <div class="col-md-3 no-pad-left text-center" ng-click="viewProfile({id:taskdata.user_id})">\n' +
    '          <div class="img-holder">\n' +
    '            <img fallback-src="{{fallbackImage}}" ng-src="{{taskdata.user_image}}" alt="User Image">\n' +
    '          </div>\n' +
    '      \n' +
    '          <!-- <span id="user_rating" class="col-md-12 text-center no-padding" uib-rating ng-model="taskdata.rating" max="5" titles="ratingTitle"\n' +
    '            read-only="true" on-leave="overStar = null" aria-labelledby="default-rating"></span> -->\n' +
    '\n' +
    '          <div id="user_name" class="col-md-12 no-padding"><a ng-click="viewProfile({id:taskdata.user_id})" class="text-center">{{taskdata.name}}</a></div>\n' +
    '          <div class="user_role" class="col-md-12 no-padding"><small>(Employer)</small></div>\n' +
    '        </div>\n' +
    '        <div class="col-md-5 no-padding budget_price">\n' +
    '          <p id="budget"><span class="pull-left">Budget</span> <span class="pull-right" ng-if="taskdata.task_budget">${{taskdata.task_budget}}</span>\n' +
    '            <span class="pull-right" ng-if="!taskdata.task_budget">N/A</span></p>\n' +
    '\n' +
    '\n' +
    '          <!-- TODO:  no data in database for agreed price -->\n' +
    '          <p id="agreed_price">\n' +
    '            <span class="pull-left">Offer</span>\n' +
    '            <span class="pull-right">{{(current_bid[0].bid_amount | currency: \'$\') || "N/A"}}\n' +
    '          </span></p>\n' +
    '          <div class="col-md-12 no-padding payment_methods">\n' +
    '            <span id="paypal_active">\n' +
    '              <i class="fa fa-paypal" ng-class="taskdata.paypal_active==1 && \'over-icons\'">\n' +
    '                <md-tooltip md-delay="10" md-direction="top">\n' +
    '                  Paypal\n' +
    '                </md-tooltip>\n' +
    '              </i>\n' +
    '            </span>\n' +
    '\n' +
    '            <span id="stripe_active">\n' +
    '              <i class="fa fa-cc-stripe" ng-class="taskdata.stripe_active==1 && \'over-icons\'">\n' +
    '                <md-tooltip md-delay="10" md-direction="top">\n' +
    '                  Stripe\n' +
    '                </md-tooltip>\n' +
    '                </i>\n' +
    '                </span>\n' +
    '\n' +
    '            <span id="cash_active">\n' +
    '              <i class="fa fa-usd" ng-class="taskdata.cash_active==1 && \'over-icons\'">\n' +
    '                <md-tooltip md-delay="10" md-direction="top">\n' +
    '                  Cash\n' +
    '                </md-tooltip>\n' +
    '                </i>\n' +
    '                </span>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '     \n' +
    '        <div class="col-md-4 no-pad-right" ng-if="current_user_id == user_id">\n' +
    '          <!-- TODO: functionality remain to send message -->\n' +
    '\n' +
    '          <a href="#" ng-if="taskdata.awarded == 1" ui-sref="message({id: taskdata.id})" ui-sref-opts="{reload: true }" ng-disabled="taskdata.status == 1" class="btn btn-default send_message">Message</a>\n' +
    '          <a href="#" class="btn btn-default completed" ng-if="taskdata.completed == 2">Waiting\n' +
    '              <md-tooltip md-delay="10" md-direction="bottom">\n' +
    '                  Waiting for the payment\n' +
    '            </md-tooltip>\n' +
    '          </a>\n' +
    '          <a href="#" ng-if="fnt_type == \'tasker\' && taskdata.awarded == 1 && (taskdata.completed == 0)" ng-click="task_completed_as_tasker(taskdata.id,\'complete\',\'lg\', taskdata.user_id)" class="btn btn-default completed">Complete\n' +
    '            <md-tooltip md-delay="10" md-direction="bottom">\n' +
    '                  Click here to mark the task completed.\n' +
    '            </md-tooltip>\n' +
    '          </a>\n' +
    '          <a href="#" ng-if="fnt_type == \'tasker\' && taskdata.awarded == 1 && taskdata.completed == 1 && taskdata.status != 1" ng-click="task_completed_as_tasker(taskdata.id, \'review\',\'lg\', taskdata.user_id)" ng-disabled="!taskdata.owner_review" class="btn btn-default completed">Review\n' +
    '            <md-tooltip md-delay="10" md-direction="bottom">\n' +
    '              Review the employer now\n' +
    '            </md-tooltip>\n' +
    '          </a>\n' +
    '          <a href="#" ng-if="fnt_type == \'tasker\' && taskdata.status == 1" ng-disabled="taskdata.owner_review && taskdata.tasker_review" class="btn btn-default completed">Completed\n' +
    '          \n' +
    '        </a>\n' +
    '        </div>\n' +
    '        <hr>\n' +
    '\n' +
    '        <div class="col-md-12 no-padding map_repost" ng-if="current_user_id == user_id">\n' +
    '          <div class="col-md-4 no-pad-left">\n' +
    '            <a href="#" id="repost_task" ng-click="editTask(taskdata.id, \'lg\',\'edit\')" class="btn btn-default">Repost</a>\n' +
    '          </div>\n' +
    '\n' +
    '          <div class="col-md-4" ng-if="taskdata.awarded == 0">\n' +
    '            <a href="#" id="accept_offer" ng-click="accept_offer(taskdata.id, taskdata.user_id, current_bid[0].bid_id)" class="btn btn-default">Accept</a>\n' +
    '          </div>\n' +
    '\n' +
    '          <div class="col-md-4 no-padding" ng-if="taskdata.awarded == 0">\n' +
    '            <a href="#" id="reject_offer" ng-click="reject_offer(taskdata.id, current_bid[0].bid_id, taskdata.user_id)" class="btn btn-default">Reject</a>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <div class="col-md-12 no-padding map_repost" ng-if="current_user_id != user_id">\n' +
    '            <div class="col-md-4 no-pad-left">\n' +
    '              <a href="#" id="repost_task" ng-click="editTask(taskdata.id, \'lg\', \'repost\')" class="btn btn-default">Post Similar Task</a>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '        <div ng-if="(taskdata.awarded == 1 || taskdata.completed == 1) && current_user_id == user_id && taskdata.status != 1" ng-hide="toggle" class="col-md-12 no-padding show_map">\n' +
    '          <ng-map zoom="10" center="{{taskdata.location}}" style="width: 60%; float:left">\n' +
    '            <directions draggable="false" panel="directions-panel" travel-mode="DRIVING" origin="{{taskdata.location}}" destination="{{mapdata.lat}},{{mapdata.lng}}">\n' +
    '            </directions>\n' +
    '            \n' +
    '          </ng-map>         \n' +
    '          <div id="directions-panel" class="alert alert-success" style="width: 40%; float:left; height: 100%; overflow: auto; padding: 0px 5px"></div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="col-md-12 no-padding task_details">\n' +
    '          <h3 class="text-center margin">Task Details</h3>\n' +
    '          <div class="col-md-12 no-padding">\n' +
    '              <div class="col-md-3 no-pad-left">\n' +
    '                <h4 class="md-title">Title:</h4>\n' +
    '              </div>\n' +
    '              <div class="col-md-9 no-padding" id="date_posted">\n' +
    '                <h3 class="md-title" ng-if="taskdata.task_title">{{taskdata.task_title}}</h3>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '          <div class="col-md-12 no-padding">\n' +
    '            <div class="col-md-3 no-pad-left">\n' +
    '              Posted\n' +
    '            </div>\n' +
    '            <div class="col-md-5 no-padding" id="date_posted">\n' +
    '              <span ng-if="taskdata.task_date">{{taskdata.task_date | date:\'EEEE dd, MMM, yyyy\'}}</span>\n' +
    '              <span ng-if="!taskdata.task_date">No Data Found</span>\n' +
    '            </div>\n' +
    '            <div class="col-md-4 no-pad-right" id="date_posted_stamp" am-time-ago="taskdata.task_date"></div>\n' +
    '          </div>\n' +
    '          <div class="col-md-12 no-padding">\n' +
    '            <div class="col-md-3 no-pad-left">\n' +
    '              Tasked\n' +
    '              <span></span>\n' +
    '            </div>\n' +
    '            \n' +
    '            <div class="col-md-5 no-padding" id="date_tasked">\n' +
    '              Monday 24, Feb, 2016\n' +
    '            </div>\n' +
    '            <div class="col-md-4 no-pad-right" id="date_tasked_stamp">a day ago</div>\n' +
    '          </div>\n' +
    '          <div class="col-md-12 no-padding" ng-if="taskdata.completed == \'1\' ">\n' +
    '            <div class="col-md-3 no-pad-left">\n' +
    '              Completed\n' +
    '            </div>\n' +
    '            <div class="col-md-5 no-padding" id="date_completed">\n' +
    '              <span ng-if="taskdata.completed_date">{{taskdata.completed_date | date:\'EEEE dd, MMM, yyyy\'  }}</span>\n' +
    '              <span ng-if="!taskdata.completed_date">No Data Found</span>\n' +
    '            </div>\n' +
    '            <div class="col-md-4 no-pad-right" id="date_completed_stamp" am-time-ago="taskdata.completed_date"></div>\n' +
    '          </div>\n' +
    '\n' +
    '          <p id="task_description">{{taskdata.task_description}}</p>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="col-md-12 text-right no-padding share_task">\n' +
    '          <i socialshare="" socialshare-provider="facebook" socialshare-text="Taskoli" socialshare-title="{{taskdata.task_title}}" socialshare-description="{{taskdata.task_description}}" socialshare-url="//taskoli.com/tasks/{{taskdata.id}}" class="fa fa-facebook-official" aria-hidden="true">\n' +
    '          <md-tooltip md-delay="10" md-direction="top">\n' +
    '            Share on Facebook\n' +
    '          </md-tooltip></i>\n' +
    '        <!--<i class="fa fa-twitter-square" aria-hidden="true"></i>-->\n' +
    '        <i socialshare="" socialshare-provider="twitter" socialshare-text="{{taskdata.task_description}}" socialshare-hashtags="Taskoli" socialshare-url="//taskoli.com/tasks/{{taskdata.id}}" class="fa fa-twitter-square" aria-hidden="true">\n' +
    '          <md-tooltip md-delay="10" md-direction="top">\n' +
    '            Share on Twitter\n' +
    '          </md-tooltip></i>\n' +
    '        <!--<i class="fa fa-google-plus-square" aria-hidden="true"></i>-->\n' +
    '        <i socialshare="" socialshare-provider="google" socialshare-url="//taskoli.com/tasks/{{taskdata.id}}" class="fa fa-google-plus-square" aria-hidden="true">\n' +
    '          <md-tooltip md-delay="10" md-direction="top">\n' +
    '            Share on gPlus\n' +
    '          </md-tooltip>\n' +
    '          </i>\n' +
    '        </div>\n' +
    '\n' +
    '      </div>\n' +
    '      <div class="col-md-6 no-pad-left" id="task_detail" ng-if="!taskdata">\n' +
    '        <div class="no-data-found">\n' +
    '          <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>\n' +
    '          No Task Found\n' +
    '        </div>\n' +
    '      </div>\n' +
    '      <!-- Tasks List  -->\n' +
    '      <div class="col-md-6 no-pad-right" id="tasks_list">\n' +
    '        <md-content>\n' +
    '          <div class="col-md-12 text-center">\n' +
    '              VIEW AS\n' +
    '          </div>\n' +
    '        </md-content>\n' +
    '        <md-content>\n' +
    '          <div class="col-md-12 no-padding popup_switch">\n' +
    '            <md-button class="md-raised md-secondry" ng-click="my_tasks_as_amployer(current_user_id,\'employer\', \'lg\');">Employer</md-button>\n' +
    '            <md-button class="md-raised md-primary">Tasker</md-button>\n' +
    '          </div>\n' +
    '          <div class="col-md-12 no-padding task_search_sort">\n' +
    '            <input type="text" class="form-control pull-left ng-pristine ng-untouched ng-valid ng-not-empty" placeholder="Search..." autofocus="" name="detailed_search" ng-model="tasker_search.detailed_search">\n' +
    '            <select class="form-control pull-right" name="task_sort" id="task_sort" ng-model="tasker_search.task_sort">\n' +
    '                      <option value="0" disabled="disabled">Sort by</option>\n' +
    '                      <option value="price_high">Price High</option>\n' +
    '                      <option value="price_low">Price Low</option>\n' +
    '                      <option value="dated">Date</option>\n' +
    '                    </select>\n' +
    '          </div>\n' +
    '          <div id="tasker_data" class="col-md-12 no-padding">\n' +
    '            <md-tabs md-dynamic-height="" md-border-bottom="">\n' +
    '              <md-tab label="Offer" md-on-select="task_search_bar(\'offer\',\'\')">\n' +
    '                <md-content>\n' +
    '                  <div class="col-md-12 no-padding tasks_details">\n' +
    '                    <ul>\n' +
    '                      <li id="task_$index" task_id="{{task.id}}" ng-repeat="task in taskerTasks track by $index" ng-click="get_task_data(\'tasker\',task.id,task.latitude,task.longitude)" ng-init="itemClicked==\'tasker\' && $index==0  && get_task_data(itemClicked,taskerTasks[0].id,task.latitude,task.longitude)" ng-class="{\'selected\': task.id == selected}">\n' +
    '                        <div class="col-md-12 no-padding">\n' +
    '                          <span id="posted_title" class="pull-left">{{task.task_title}}</span>\n' +
    '                          <span id="posted_date" class="pull-right">{{task.task_date | date:\'MMMM, dd, yyyy\'  }}</span>\n' +
    '                        </div>\n' +
    '                        <p>{{task.task_description | limitTo: 175}}<span ng-if="task.task_description.length >=175">...</span></p>\n' +
    '                      </li>\n' +
    '                      <li ng-if="taskerTasks == \'\' ">No Data Found</li>\n' +
    '                    </ul>\n' +
    '                  </div>\n' +
    '                </md-content>\n' +
    '              </md-tab>\n' +
    '              <md-tab label="Tasked" md-on-select="task_search_bar(\'tasked\',\'\')">\n' +
    '                <md-content>\n' +
    '                  <div class="col-md-12 no-padding tasks_details">\n' +
    '                    <ul>\n' +
    '                      <li id="task_$index" task_id="{{task.id}}" ng-repeat="task in taskerTasks track by $index" ng-click="get_task_data(\'tasker\',task.id,task.latitude,task.longitude)" ng-init="itemClicked==\'tasker\' && $index==0  && get_task_data(itemClicked,taskerTasks[0].id,task.latitude,task.longitude)" ng-class="{\'selected\': task.id == selected}">\n' +
    '                        <div class="col-md-12 no-padding">\n' +
    '                          <span id="posted_title" class="pull-left">{{task.task_title}}</span>\n' +
    '                          <span id="posted_date" class="pull-right">{{task.task_date | date:\'MMMM, dd, yyyy\'  }}</span>\n' +
    '                        </div>\n' +
    '                        <p>{{task.task_description}}</p>\n' +
    '                      </li>\n' +
    '                      <li ng-if="taskerTasks == \'\' ">No Data Found</li>\n' +
    '                    </ul>\n' +
    '                  </div>\n' +
    '                </md-content>\n' +
    '              </md-tab>\n' +
    '              <md-tab label="Completed" md-on-select="task_search_bar(\'completed\',\'\')">\n' +
    '                <md-content>\n' +
    '                  <div class="col-md-12 no-padding tasks_details">\n' +
    '                    <ul>\n' +
    '                      <li id="task_$index" task_id="{{task.id}}" ng-repeat="task in taskerTasks track by $index" ng-click="get_task_data(\'tasker\',task.id,task.latitude,task.longitude)" ng-init="itemClicked==\'tasker\' && $index==0  && get_task_data(itemClicked,taskerTasks[0].id,task.latitude,task.longitude)" ng-class="{\'selected\': task.id == selected}">\n' +
    '                        <div class="col-md-12 no-padding">\n' +
    '                          <span id="posted_title" class="pull-left">{{task.task_title}}</span>\n' +
    '                          <span id="posted_date" class="pull-right">{{task.task_date | date:\'MMMM, dd, yyyy\'  }}</span>\n' +
    '                        </div>\n' +
    '                        <p>{{task.task_description}}</p>\n' +
    '                      </li>\n' +
    '                      <li ng-if="taskerTasks == \'\' ">No Data Found</li>\n' +
    '                    </ul>\n' +
    '                  </div>\n' +
    '                </md-content>\n' +
    '              </md-tab>\n' +
    '            </md-tabs>\n' +
    '          </div>\n' +
    '        </md-content>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div></div>');
	a.put('/frontend/mytask/employer/view/employer.html', '<!-- Modal My Task Popup -->\n' +
    '<div id="my_task_popup" role="dialog" class="global-modal">\n' +
    '  <!-- Modal content-->\n' +
    '  <div class="modal-content">\n' +
    '    <div class="modal-body">\n' +
    '      <!-- Tasks Detail  -->\n' +
    '      <div class="col-md-6 no-pad-left" id="task_detail" ng-if="taskdata">\n' +
    '\n' +
    '\n' +
    '        <div ng-if="taskdata.awarded == 0" class="col-md-3 no-pad-left tasker_dtl text-center" ng-click="viewProfile({id:taskdata.user_id})">\n' +
    '          <div class="img-holder">\n' +
    '            <img fallback-src="{{fallbackImage}}" ng-src="{{taskdata.user_image}}" alt="User Image">\n' +
    '          </div>\n' +
    '\n' +
    '          <div id="user_name" class="col-md12 no-padding">\n' +
    '            <a class="text-center" ng-click="viewProfile({id:taskdata.user_id})">{{taskdata.name}}</a>\n' +
    '          </div>\n' +
    '          <div class="user_role" class="col-md-12 no-padding" ng-if="taskdata.user_id != current_user_id">(Tasker)</div>\n' +
    '        </div>\n' +
    '\n' +
    '\n' +
    '        <div ng-if="taskdata.awarded == 1" class="col-md-3 no-pad-left tasker_dtl text-center">\n' +
    '          <div class="img-holder">\n' +
    '            <img fallback-src="{{fallbackImage}}" ng-src="{{taskinfo.user_image}}" alt="User Image">\n' +
    '          </div>\n' +
    '\n' +
    '          <!-- <span id="user_rating" class="col-md-12 no-padding" uib-rating ng-model="taskinfo.rating" max="5" titles="ratingTitle" read-only="true"\n' +
    '            on-leave="overStar = null" aria-labelledby="default-rating"></span> -->\n' +
    '\n' +
    '          <div id="user_name" class="col-md12 no-padding">\n' +
    '            <a href="{{site_url}}taskercontroller/tasker_profile/{{taskinfo.user_id}}" class="text-center">{{taskinfo.name}}</a>\n' +
    '          </div>\n' +
    '          <div class="user_role" class="col-md-12 no-padding text-center" ng-if="taskinfo.user_id != current_user_id"><small>(Tasker)</small></div>\n' +
    '        </div>\n' +
    '\n' +
    '\n' +
    '        <div class="col-md-5 no-padding budget_price">\n' +
    '          <p id="budget">\n' +
    '            <span class="pull-left">Budget:</span>\n' +
    '            <span class="pull-right" ng-if="taskdata.task_budget">${{taskdata.task_budget}}</span>\n' +
    '            <span class="pull-right" ng-if="!taskdata.task_budget">OBO/span>\n' +
    '          </span></p>\n' +
    '\n' +
    '          <!-- TODO:  no data in database for agreed price -->\n' +
    '          <p id="agreed_price">\n' +
    '            <span class="pull-left">Offered:</span>\n' +
    '            <span ng-repeat="bid in bids" ng-if="taskdata.awarded == 1">\n' +
    '              <span class="pull-right" ng-if="bid.user_id == awarded_to && bid.bid_status == 1">${{bid.bid_amount}}</span>\n' +
    '            </span>\n' +
    '            <span class="pull-right" ng-if="taskdata.awarded == 0">Not Hired Yet</span>\n' +
    '          </p>\n' +
    '          <div class="col-md-12 no-padding payment_methods">\n' +
    '            <span id="paypal_active">\n' +
    '              <i class="fa fa-paypal" ng-class="taskdata.paypal_active==1 && \'over-icons\'">\n' +
    '                <md-tooltip md-delay="10" md-direction="top">\n' +
    '                  Paypal\n' +
    '                </md-tooltip>\n' +
    '              </i>\n' +
    '            </span>\n' +
    '\n' +
    '            <span id="stripe_active">\n' +
    '              <i class="fa fa-cc-stripe" ng-class="taskdata.stripe_active==1 && \'over-icons\'">\n' +
    '                <md-tooltip md-delay="10" md-direction="top">\n' +
    '                  Stripe\n' +
    '                </md-tooltip>\n' +
    '              </i>\n' +
    '            </span>\n' +
    '\n' +
    '            <span id="cash_active">\n' +
    '              <i class="fa fa-usd" ng-class="taskdata.cash_active==1 && \'over-icons\'">\n' +
    '                <md-tooltip md-delay="10" md-direction="top">\n' +
    '                  Cash\n' +
    '                </md-tooltip>\n' +
    '              </i>\n' +
    '            </span>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <div class="col-md-4 no-pad-right" ng-if="current_user_id == taskdata.user_id">\n' +
    '          <!-- TODO: functionality remain to send message -->\n' +
    '          <a href="#" ng-if="taskdata.awarded == 1" ui-sref="message({id: taskdata.id})" ui-sref-opts="{reload: true }" ng-disabled="taskdata.status == 1" class="btn btn-default send_message">Message</a>\n' +
    '          <a href="#" ng-if="taskdata.awarded == 1 && taskdata.completed == 0" ng-disabled="true" class="btn btn-default send_message">Waiting</a>\n' +
    '          <a href="#" ng-if="taskdata.awarded == 1 && taskdata.completed == 1" ng-click="task_completed_as_employer(awarded_to,\'pay\',\'lg\')" class="btn btn-default completed" ng-disabled="disabledBtn1 && taskdata.tasker_review != 0">Pay & Review</a>\n' +
    '          <a href="#" ng-if="fnt_type == \'employer\' && taskdata.awarded == 1 && (taskdata.completed == 2)" ng-click="task_completed_as_employer(awarded_to,\'complete\',\'lg\')" ng-hide="disabledBtn" class="btn btn-default completed">\n' +
    '            Completed\n' +
    '            <md-tooltip md-delay="10" md-direxxction="bottom">\n' +
    '              Click here to mark the task completed\n' +
    '            </md-tooltip>\n' +
    '          </a>\n' +
    '        </div>\n' +
    '        <hr>\n' +
    '        <div class="col-md-12 no-padding map_repost">\n' +
    '          <div class="col-md-4 no-pad-left" ng-if="(taskdata.awarded == 1 || taskdata.completed == 1) && current_user_id != taskdata.user_id ">\n' +
    '            <a href="#" ng-click="toggleMap()" class="btn btn-default">Map</a>\n' +
    '          </div>\n' +
    '          <div class="col-md-4 no-pad-left" ng-if="!other">\n' +
    '            <a href="#" id="repost_task" ng-click="editTask(taskdata.id, \'lg\',\'repost\')" class="btn btn-default">Repost</a>\n' +
    '          </div>\n' +
    '          <div ng-if="taskdata.status == 0 && taskdata.awarded == 0 && !other" class="col-md-4 no-padding">\n' +
    '            <a href="#" id="repost_task" ng-click="editTask(taskdata.id, \'lg\',\'update\')" class="btn btn-default">Edit Task</a>\n' +
    '          </div>\n' +
    '          <div class="col-md-6 no-pad-left" ng-if="other">\n' +
    '            <a href="#" id="repost_task" ng-click="editTask(taskdata.id, \'lg\',\'repost\')" class="btn btn-default">Post Similar Task</a>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div ng-if="taskdata.awarded == 1 || taskdata.completed == 1" ng-hide="toggle" class="col-md-12 no-padding show_map">\n' +
    '          <ng-map zoom="10" center="{{taskdata.location}}">\n' +
    '            <directions draggable="false" panel="directions-panel" travel-mode="DRIVING" origin="{{taskdata.location}}" destination="{{mapdata.lat}},{{mapdata.lng}}">\n' +
    '            </directions>\n' +
    '            \n' +
    '          </ng-map>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="col-md-12 no-padding task_details">\n' +
    '          <h3 class="text-center margin">Task Details</h3>\n' +
    '          <div class="col-md-12 no-padding">\n' +
    '            <div class="col-md-3 no-pad-left">\n' +
    '              <h4 class="md-title">Title:</h4>\n' +
    '            </div>\n' +
    '            <div class="col-md-9 no-padding" id="date_posted">\n' +
    '              <h3 class="md-title" ng-if="taskdata.task_title">{{taskdata.task_title}}</h3>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '          <div class="col-md-12 no-padding">\n' +
    '            <div class="col-md-3 no-pad-left">\n' +
    '              Posted\n' +
    '            </div>\n' +
    '            <div class="col-md-5 no-padding" id="date_posted">\n' +
    '              <span ng-if="taskdata.task_date">{{taskdata.task_date | date:\'EEEE dd, MMM, yyyy\'}}</span>\n' +
    '              <span ng-if="!taskdata.task_date">No Data Found</span>\n' +
    '            </div>\n' +
    '            <div class="col-md-4 no-pad-right" id="date_posted_stamp" am-time-ago="taskdata.task_date"></div>\n' +
    '          </div>\n' +
    '          <div class="col-md-12 no-padding">\n' +
    '            <div class="col-md-3 no-pad-left">\n' +
    '              Tasked\n' +
    '              <span></span>\n' +
    '            </div>\n' +
    '            <!-- TODO:  no data in database for tasked date -->\n' +
    '            <div class="col-md-5 no-padding" id="date_tasked">\n' +
    '              {{taskdata.tasked_date | date:\'EEEE dd, MMM, yyyy\' || "No Data Found"}}\n' +
    '            </div>\n' +
    '            <div class="col-md-4 no-pad-right" id="date_tasked_stamp">a day ago</div>\n' +
    '          </div>\n' +
    '          <div class="col-md-12 no-padding" ng-if="taskdata.completed == \'1\' ">\n' +
    '            <div class="col-md-3 no-pad-left">\n' +
    '              Completed\n' +
    '            </div>\n' +
    '            <div class="col-md-5 no-padding" id="date_completed">\n' +
    '              <span ng-if="taskdata.completed_date">{{taskdata.completed_date | date:\'EEEE dd, MMM, yyyy\' }}</span>\n' +
    '              <span ng-if="!taskdata.completed_date">No Data Found</span>\n' +
    '            </div>\n' +
    '            <div class="col-md-4 no-pad-right" id="date_completed_stamp" am-time-ago="taskdata.completed_date"></div>\n' +
    '          </div>\n' +
    '\n' +
    '          <p id="task_description">{{taskdata.task_description}}</p>\n' +
    '\n' +
    '          <div id="bid_list" class="col-md-12 no-padding task_qa offer_hover_list" ng-if="!taskinfo">\n' +
    '            <h6>Offers list</h6>\n' +
    '            <ul id="task_bid_api">\n' +
    '              <li ng-if="bids == \'\'">There is no offer made yet.</li>\n' +
    '              <li ng-if="bids != \'\'" ng-repeat="bidData in bids">\n' +
    '                <div class="image_holder">\n' +
    '                  <img src="{{bidData.user_image}}" fallback-src="">\n' +
    '                </div>\n' +
    '                <div class="name_timestamp">\n' +
    '                  <div class="user_name pull-left">\n' +
    '                    <a href="#">{{bidData.name}}</a>\n' +
    '                    <span id="task_rating_api" uib-rating="" ng-model="bidData.rating" max="5" titles="ratingTitle" read-only="true" on-leave="overStar = null" aria-labelledby="default-rating"></span>\n' +
    '                  </div>\n' +
    '                  <div class="time_stamp pull-right">\n' +
    '                    <span id="bid_date_ago" am-time-ago="bidData.bid_date"></span>\n' +
    '                    <div id="bid_rating" ng-if="user_id == taskdata.user_id">\n' +
    '                      <span class="bid_amount pull-right">${{bidData.bid_amount}}</span>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <hr>\n' +
    '                  <div class="col-md-12 no-padding question">\n' +
    '                    <div class="col-md-6 no-padding">\n' +
    '                      <p>{{bidData.bid_description}}</p>\n' +
    '                      <small>{{bidData.bid_date | date:\'EEE dd, MMM, yyyy HH:MM a\'}}</small>\n' +
    '                    </div>\n' +
    '                    <div class="col-md-6 no-padding">\n' +
    '                      <md-button class="md-raised pull-right hire" ng-click="hire(bidData,\'md\')" id="hire_now" ng-if="user_id == taskdata.user_id">Hire</md-button>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                </div>\n' +
    '              </li>\n' +
    '            </ul>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="col-md-12 text-right no-padding share_task">\n' +
    '          <i socialshare="" socialshare-provider="facebook" socialshare-text="Taskoli" socialshare-title="{{taskdata.task_title}}" socialshare-description="{{taskdata.task_description}}" socialshare-url="https://taskoli.com/tasks/{{taskdata.id}}" class="fa fa-facebook-official" aria-hidden="true">\n' +
    '            <md-tooltip md-delay="10" md-direction="top">\n' +
    '              Share on Facebook\n' +
    '            </md-tooltip>\n' +
    '          </i>\n' +
    '          <!--<i class="fa fa-twitter-square" aria-hidden="true"></i>-->\n' +
    '          <i socialshare="" socialshare-provider="twitter" socialshare-text="{{taskdata.task_description}}" socialshare-hashtags="Taskoli" socialshare-url="https://taskoli.com/tasks/{{taskdata.id}}" class="fa fa-twitter-square" aria-hidden="true">\n' +
    '            <md-tooltip md-delay="10" md-direction="top">\n' +
    '              Share on Twitter\n' +
    '            </md-tooltip>\n' +
    '          </i>\n' +
    '          <!--<i class="fa fa-google-plus-square" aria-hidden="true"></i>-->\n' +
    '          <i socialshare="" socialshare-provider="google" socialshare-url="https://taskoli.com/tasks/{{taskdata.id}}" class="fa fa-google-plus-square" aria-hidden="true">\n' +
    '            <md-tooltip md-delay="10" md-direction="top">\n' +
    '              Share on gPlus\n' +
    '            </md-tooltip>\n' +
    '          </i>\n' +
    '        </div>\n' +
    '\n' +
    '      </div>\n' +
    '      <div class="col-md-6 no-pad-left" id="task_detail" ng-if="!taskdata">\n' +
    '        <div class="no-data-found">\n' +
    '          <i class="fa fa-exclamation-triangle" aria-hidden="true"></i> No Task Found\n' +
    '        </div>\n' +
    '      </div>\n' +
    '      <!-- Tasks List  -->\n' +
    '      <div class="col-md-6 no-pad-right" id="tasks_list">\n' +
    '         <md-content>\n' +
    '          <div class="col-md-12 text-center">\n' +
    '              VIEW AS\n' +
    '          </div>\n' +
    '        </md-content>\n' +
    '        <md-content>\n' +
    '          <div class="col-md-12 no-padding popup_switch">\n' +
    '            <md-button class="md-raised md-primary">Employer</md-button>\n' +
    '            <md-button class="md-raised md-secondry" ng-click="my_tasks_as_tasker(current_user_id,\'tasker\', \'lg\');">Tasker</md-button>\n' +
    '          </div>\n' +
    '          <div class="col-md-12 no-padding task_search_sort">\n' +
    '            <input type="text" class="form-control pull-left ng-pristine ng-untouched ng-valid ng-not-empty" placeholder="Search..." autofocus="" name="detailed_search" ng-model="employer_search.detailed_search">\n' +
    '            <select class="form-control pull-right" name="task_sort" id="task_sort" ng-model="employer_search.task_sort">\n' +
    '              <option value="0" disabled="disabled">Sort by</option>\n' +
    '              <option value="price_high">Price High</option>\n' +
    '              <option value="price_low">Price Low</option>\n' +
    '              <option value="dated">Date</option>\n' +
    '            </select>\n' +
    '          </div>\n' +
    '          <div class="col-md-12 no-padding" id="employer_data">\n' +
    '            <md-tabs md-dynamic-height="" md-border-bottom="">\n' +
    '              <!-- <md-tab label="All" md-on-select="task_search_bar(\'all\',\'\')">\n' +
    '                <md-content>\n' +
    '                  <div class="col-md-12 no-padding tasks_details">\n' +
    '                    <ul>\n' +
    '                      <li id="task_$index" task_id={{task.id}} ng-repeat="task in employerTasks track by $index" ng-click="get_task_data(\'employer\',task.id,task.latitude,task.longitude)"\n' +
    '                        ng-init="itemClicked==\'employer\' && $index==0 && get_task_data(itemClicked,employerTasks[0].id,task.latitude,task.longitude)"\n' +
    '                        ng-class="{\'selected\': task.id == selected}">\n' +
    '                        <div class="col-md-12 no-padding">\n' +
    '                          <span id="posted_title" class="pull-left">{{task.task_title}}</span>\n' +
    '                          <span id="posted_date" class="pull-right">{{task.task_date | date:\'MMMM, dd, yyyy\'  }}</span>\n' +
    '                        </div>\n' +
    '                        <p>{{task.task_description}}</p>\n' +
    '                      </li>\n' +
    '                      <li ng-if="employerTasks == \'\' ">No Data Found</li>\n' +
    '                    </ul>\n' +
    '                  </div>\n' +
    '                </md-content>\n' +
    '              </md-tab> -->\n' +
    '              <md-tab label="Open" md-on-select="task_search_bar(\'open\',\'\')">\n' +
    '                <md-content>\n' +
    '                  <div class="col-md-12 no-padding tasks_details">\n' +
    '                    <ul>\n' +
    '                      <li id="task_$index" task_id="{{task.id}}" ng-repeat="task in employerTasks track by $index" ng-click="get_task_data(\'employer\',task.id,task.latitude,task.longitude)" ng-init="itemClicked==\'employer\' && $index==0 && get_task_data(itemClicked,employerTasks[0].id,task.latitude,task.longitude)" ng-class="{\'selected\': task.id == selected}">\n' +
    '                        <div class="col-md-12 no-padding">\n' +
    '                          <span id="posted_title" class="pull-left">{{task.task_title}}</span>\n' +
    '                          <span id="posted_date" class="pull-right">{{task.task_date | date:\'MMMM, dd, yyyy\' }}</span>\n' +
    '                        </div>\n' +
    '                        <p>{{task.task_description | limitTo: 175}}<span ng-if="task.task_description.length >=175">...</span></p>\n' +
    '                      </li>\n' +
    '                      <li ng-if="employerTasks == \'\' ">No Data Found</li>\n' +
    '                    </ul>\n' +
    '                  </div>\n' +
    '                </md-content>\n' +
    '              </md-tab>\n' +
    '              <md-tab label="Tasked" md-on-select="task_search_bar(\'tasked\',\'\')">\n' +
    '                <md-content>\n' +
    '                  <div class="col-md-12 no-padding tasks_details">\n' +
    '                    <ul>\n' +
    '                      <li id="task_$index" task_id="{{task.id}}" ng-repeat="task in employerTasks track by $index" ng-click="get_task_data(\'employer\',task.id,task.latitude,task.longitude)" ng-init="itemClicked==\'employer\' && $index==0 && get_task_data(itemClicked,employerTasks[0].id,task.latitude,task.longitude)" ng-class="{\'selected\': task.id == selected}">\n' +
    '                        <div class="col-md-12 no-padding">\n' +
    '                          <span id="posted_title" class="pull-left">{{task.task_title}}</span>\n' +
    '                          <span id="posted_date" class="pull-right">{{task.task_date | date:\'MMMM, dd, yyyy\' }}</span>\n' +
    '                        </div>\n' +
    '                        <p>{{task.task_description}}</p>\n' +
    '                      </li>\n' +
    '                      <li ng-if="employerTasks == \'\' ">No Data Found</li>\n' +
    '                    </ul>\n' +
    '                  </div>\n' +
    '                </md-content>\n' +
    '              </md-tab>\n' +
    '              <md-tab label="Completed" md-on-select="task_search_bar(\'completed\',\'\')">\n' +
    '                <md-content>\n' +
    '                  <div class="col-md-12 no-padding tasks_details">\n' +
    '                    <ul>\n' +
    '                      <li id="task_$index" task_id="{{task.id}}" ng-repeat="task in employerTasks track by $index" ng-click="get_task_data(\'employer\',task.id,task.latitude,task.longitude)" ng-init="itemClicked==\'employer\' && $index==0 && get_task_data(itemClicked,employerTasks[0].id,task.latitude,task.longitude)" ng-class="{\'selected\': task.id == selected}">\n' +
    '                        <div class="col-md-12 no-padding">\n' +
    '                          <span id="posted_title" class="pull-left">{{task.task_title}}</span>\n' +
    '                          <span id="posted_date" class="pull-right">{{task.task_date | date:\'MMMM, dd, yyyy\' }}</span>\n' +
    '                        </div>\n' +
    '                        <p>{{task.task_description}}</p>\n' +
    '                      </li>\n' +
    '                      <li ng-if="employerTasks == \'\' ">No Data Found</li>\n' +
    '                    </ul>\n' +
    '                  </div>\n' +
    '                </md-content>\n' +
    '              </md-tab>\n' +
    '            </md-tabs>\n' +
    '\n' +
    '          </div>\n' +
    '        </md-content>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div></div>');
	a.put('/frontend/tasks/view/tasks.html', '<section id="browse-tasks" class="bg-shade">\n' +
    '  <div class="container-fluid">\n' +
    '    <div class="row">\n' +
    '      <div class="col-md-4 list-tasks no-padding">\n' +
    '        <div id="browser-directory">\n' +
    '          <div class="holder no-padding">\n' +
    '            <div id="browser-filter" class="search_task">\n' +
    '              <div class="row" ng-if="showUpdateBar">\n' +
    '                <div class="col-md-12 text-center margin sticky">\n' +
    '                  <a ng-click="search_bar()"> New Tasks Added: Click here to see new Tasks</a>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-md-12 no-padding" id="task_search">\n' +
    '                <div class="search_bar" id="search_bar">\n' +
    '                  <input class="form-control" name="detailed_search" id="detailed_search" type="text" placeholder="Search..." ng-model="search.detailed_search" ng-model-options="{ debounce: 500 }" ng-focus="toggleSearchBar(\'focus\')">\n' +
    '                  <a href="#" class="pull-right clear">\n' +
    '                    <i ng-click="clearSearch(search)" class="fa fa-times-circle" aria-hidden="true"></i>\n' +
    '                  </a>\n' +
    '                  <!-- <hr> -->\n' +
    '\n' +
    '                  <div ng-hide="toggle" class="col-md-12 no-padding" id="search_tabs">\n' +
    '                    <md-content>\n' +
    '                      <md-tabs md-dynamic-height="" md-border-bottom="">\n' +
    '                        <md-tab label="Status">\n' +
    '                          <md-content class="md-padding">\n' +
    '                            <label ng-model="search.task_status" uib-btn-radio="\'all\'">All</label>\n' +
    '                            <label ng-model="search.task_status" class="open" uib-btn-radio="\'open\'">Open</label>\n' +
    '                            <label ng-model="search.task_status" class="taskedTask" uib-btn-radio="\'tasked\'">Tasked</label>\n' +
    '                            <label ng-model="search.task_status" class="expired" uib-btn-radio="\'expired\'">Completed</label>\n' +
    '                          </md-content>\n' +
    '                        </md-tab>\n' +
    '\n' +
    '                        <md-tab label="Price" md-on-select="broadcastSlider()">\n' +
    '                          <md-content class="md-padding">\n' +
    '                            <rzslider rz-slider-model="priceSlider.minValue" rz-slider-high="priceSlider.maxValue" rz-slider-options="priceSlider.options" rz-slider-step="priceSlider.step"></rzslider>\n' +
    '                            {{lastSliderUpdated}}\n' +
    '                          </md-content>\n' +
    '                        </md-tab>\n' +
    '\n' +
    '                        <md-tab label="Distance" md-on-select="broadcastSlider()">\n' +
    '                          <md-content class="md-padding">\n' +
    '                            <rzslider rz-slider-model="distanceSlider.minValue" rz-slider-high="distanceSlider.maxValue" rz-slider-options="distanceSlider.options"></rzslider>\n' +
    '                          </md-content>\n' +
    '                        </md-tab>\n' +
    '\n' +
    '                        <!-- <md-tab label="Posted">\n' +
    '                          <md-content class="md-padding">\n' +
    '                            <label ng-model="search.posted" uib-btn-radio="\'newest\'" ng-model-options="{ allowInvalid: true, debounce: 500 }">Newest</label>\n' +
    '                            <label ng-model="search.posted" uib-btn-radio="\'oldest\'" ng-model-options="{ allowInvalid: true, debounce: 500 }">Oldest</label>\n' +
    '                          </md-content>\n' +
    '                        </md-tab> -->\n' +
    '                        <md-tab label="Location">\n' +
    '                          <md-content class="sm-padding">\n' +
    '                            <input type="text" autocomplete="off" name="location" ng-model="search.city_name" ng-model-options="{ allowInvalid: true, debounce: 500 }" id="city_name" class="form-control" g-places-autocomplete="" options="autocompleteOptions" ng-model="task.task_location" force-selection="true" placeholder="City Name">\n' +
    '                          </md-content>\n' +
    '                        </md-tab>\n' +
    '                      </md-tabs>\n' +
    '                      <div class="col-md-12 no-padding margin text-center">\n' +
    '                        <i class="fa fa-chevron-up close_search" ng-click="toggleSearchBar(\'close\')"></i>\n' +
    '                        <i class="fa fa-chevron-up close_search" ng-click="toggleSearchBar(\'close\')"></i>\n' +
    '                        <i class="fa fa-chevron-up close_search" ng-click="toggleSearchBar(\'close\')"></i>\n' +
    '                      </div>\n' +
    '                    </md-content>\n' +
    '                  </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div id="task_div" ng-cloak="">\n' +
    '              <ul id="task-list" infinite-scroll-parent="">\n' +
    '                <div id="left_side_tasks" infinite-scroll="loadMore()" infinite-scroll-disabled="busyLoadingData" infinite-scroll-distance="1" infinite-scroll-container="\'#task-list\'">\n' +
    '                  <li ng-if="tasks.length!=0" ui-sref-active="active" class="task-thumb task-thumb-$index" id="task_$index" ng-repeat="task in tasks track by $index">\n' +
    '                    <div class="col-md-3 text-center no-padding" ui-sref="other-profile({name: task.user_id, task: task.id})">\n' +
    '                      <img width="60" src="{{task.user_image}}" fallback-src="">\n' +
    '                      <span class="task-author">\n' +
    '                        <p ui-sref="other-profile({name: task.user_id, task: task.id})" class="user-fullname">{{task.name}}</p>\n' +
    '                      </span>\n' +
    '                      <span id="user_rating" class="col-md-12 no-padding" uib-rating="" ng-model="task.rating" max="5" titles="ratingTitle" read-only="true" on-leave="overStar = null" aria-labelledby="default-rating"></span>\n' +
    '                    </div>\n' +
    '                    <div class="col-md-6 no-padding task-list-description" ui-sref="task({id: task.id, city: search.city_name})" ui-sref-opts="{reload: \'task\'}">\n' +
    '                      <h2 class="task-title">{{task.task_title | limitTo: 20}}\n' +
    '                        <span ng-if="task.task_title.length >= 20">...</span>\n' +
    '                      </h2>\n' +
    '                      <div class="col-md-12 no-padding distance">\n' +
    '                        <span>\n' +
    '                          &lt; {{task.distance==0 ? 1 : task.distance}} kms</span>  - Posted <span am-time-ago="task.task_date">\n' +
    '                      </span></div>\n' +
    '                      <div class="col-md-12 no-padding offer_question">\n' +
    '                        {{task.ChatCounts}} comments <br> {{task.OfferCounts}} offers\n' +
    '                      </div>\n' +
    '                    </div> \n' +
    '                    <div class="col-md-3 no-padding" ui-sref="task({id: task.id, city: search.city_name})" ui-sref-opts="{reload: \'task\'}">\n' +
    '                      <div class="col-md-12 no-padding text-right budget">\n' +
    '                          <i ng-if="task.task_sooner == 1 && task.status == 0" class="fa fa-clock-o sooner_task" aria-hidden="true">\n' +
    '                              <md-tooltip md-delay="10" md-direction="top">\n' +
    '                                  ASAP\n' +
    '                                </md-tooltip>\n' +
    '                          </i>\n' +
    '                         <span ng-if="task.task_budget != 0">${{task.task_budget}}</span><span ng-if="task.task_budget == 0">OBO</span><br>\n' +
    '                      </div>\n' +
    '\n' +
    '                      <div class="col-md-12 no-padding task_status">\n' +
    '                        <span ng-if="task.status == 0 && task.awarded == 0" class="label label-success">Open</span>\n' +
    '                        <span ng-if="task.status == 0 && task.awarded == 1" class="label label-primary">Tasked</span>\n' +
    '                        <span ng-if="task.status == 1" class="label label-danger">Completed</span>\n' +
    '                      </div>\n' +
    '                      <div class="col-md-12 no-padding payment_methods">\n' +
    '                        <span id="paypal_active">\n' +
    '                            <i class="fa fa-paypal" ng-class="task.paypal_active==1 && \'over-icons\'">\n' +
    '                            <md-tooltip md-delay="10" md-direction="bottom">\n' +
    '                              Paypal\n' +
    '                            </md-tooltip>\n' +
    '                            </i></span>\n' +
    '\n' +
    '                        <span id="stripe_active">\n' +
    '                            <i class="fa fa-cc-stripe" ng-class="task.stripe_active==1 && \'over-icons\'">\n' +
    '                            <md-tooltip md-delay="10" md-direction="bottom">\n' +
    '                              Stripe\n' +
    '                            </md-tooltip>\n' +
    '                            </i></span>\n' +
    '\n' +
    '                        <span id="cash_active">\n' +
    '                            <i class="fa fa-usd" ng-class="task.cash_active==1 && \'over-icons\'">\n' +
    '                            <md-tooltip md-delay="10" md-direction="bottom">\n' +
    '                              Cash\n' +
    '                            </md-tooltip></i></span>\n' +
    '                      </div>\n' +
    '                    </div>\n' +
    '                    <!--<div ng-show="busy">Loading data...</div>-->\n' +
    '                  </li>\n' +
    '                  <div ng-if="tasks.length==0" id="no-data">No data Found </div>\n' +
    '                </div>\n' +
    '              </ul>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '\n' +
    '      <div class="col-md-8 no-padding" id="map_area">\n' +
    '        <div ng-if="pauseLoading">\n' +
    '          <!--<h1>Add loading spinner</h1>-->\n' +
    '          <div class="spinner" layout="row" layout-sm="column" layout-align="space-around">\n' +
    '            <md-progress-circular md-mode="indeterminate"></md-progress-circular>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <div ng-if="!pauseLoading">\n' +
    '          <div ui-view="task"></div>\n' +
    '          <div id="browser-filter">\n' +
    '            <ng-map zoom="15" min-zoom="11" max-zoom="18" geo-fallback-center="48.45, -123.36" center="current-location" id="map" scrollwheel="true" zoom-to-include-markers="auto">\n' +
    '              <shape name="circle" ng-repeat="task in tasks" no-watcher="true" stroke-color="#60ba25 " stroke-opacity="0.8" stroke-weight="2" fill-color="#60ba25 " fill-opacity="0.9" center="{{task.latitude}},{{task.longitude}}" radius="30" on-click="showInfo(event, task)">\n' +
    '              </shape>\n' +
    '              <marker ng-if="task.latitude" ng-repeat="task in tasks" icon="{ url:\'/content/img/help-logo.png\', scaledSize:[25,25], origin: [0,0], anchor: [12.5, 12.5] }" position="{{task.latitude}},{{task.longitude}}" title="{{task.task_title}}" on-click="showInfo(event, task)" id="marker_{{task.id}}" animation="{{(task.user_id == current_user_id || task.task_id == current_user_id) ? \'BOUNCE\' : \'DROP\'}}">\n' +
    '            </marker>\n' +
    '            </ng-map>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</section>');
	a.put('/frontend/tasks/view/task.html', '<div class="main-container">\n' +
    '  <div class="infowindow" id="browsertask_info" ng-class="{\'transparent\': transBG}">\n' +
    '    <div class="col-md-8 no-pad-left left">\n' +
    '      <h3 class="title_task">\n' +
    '        <span id="task_title_api">{{selectedData.selectedData.task.task_title | limitTo: 50}}\n' +
    '          <md-tooltip md-delay="10" md-direction="top">\n' +
    '            {{selectedData.selectedData.task.task_title}}\n' +
    '          </md-tooltip>\n' +
    '          <span ng-if="selectedData.selectedData.task.task_title.length > 50">...</span>\n' +
    '        </span>\n' +
    '        <i ng-if="selectedData.selectedData.task.task_sooner == 1" class="fa fa-clock-o sooner_task" aria-hidden="true">\n' +
    '          <md-tooltip md-delay="10" md-direction="top">\n' +
    '            ASAP\n' +
    '          </md-tooltip></i>\n' +
    '      </h3>\n' +
    '      <p>Posted <span id="task_date_ago_api" am-time-ago="selectedData.selectedData.task.task_date"></span>  <small> (\n' +
    '        &lt; {{selectedData.selectedData.task.distance==0 ? 1 : selectedData.selectedData.task.distance}} km )</small></p>\n' +
    '      <div id="task_id" style="visibility:hidden"></div>\n' +
    '      <div class="col-md-12 no-padding offers">\n' +
    '        <div class="col-md-5 no-pad-left">\n' +
    '        <div class="text-center count_down">\n' +
    '          <h4><b>Task Start Time</b></h4>\n' +
    '          <p>{{selectedData.selectedData.task.start_date | date:\'EEE dd, MMM, yyyy @ hh:MM a\'}}</p>\n' +
    '          <p><span ng-if="!isDatePassed(selectedData.selectedData.task.start_date)">Starts in</span> <span countdown="" date="selectedData.selectedData.task.start_date"></span></p>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '      <div class="col-md-3 no-pad-left">\n' +
    '        <div ng-if="selectedData.selectedData.bids.length > 0" ng-init="popoverOpened1=false" ng-mouseover="popoverOpened1=true" ng-mouseleave="popoverOpened1=false" class="btn btn-primary btn-lg offer-btn">\n' +
    '          <span popover-placement="bottom" uib-popover-template="offersList.templateUrl" popover-is-open="popoverOpened1">Offers<br>\n' +
    '                    <span id="offer_count">{{selectedData.selectedData.bids.length}}</span>\n' +
    '          </span>\n' +
    '        </div>\n' +
    '        <div ng-if="selectedData.selectedData.bids.length == 0" class="btn btn-primary btn-lg offer-btn">\n' +
    '          <span>Offers<br>\n' +
    '                    <span id="offer_count">{{selectedData.selectedData.bids.length}}</span>\n' +
    '          </span>\n' +
    '          <md-tooltip md-delay="10" md-direction="top">\n' +
    '            No Offer made yet\n' +
    '          </md-tooltip>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '      <div class="col-md-4 no-padding">\n' +
    '        \n' +
    '        <!-- make new offer -->\n' +
    '        <div ng-if="!selectedData.myOffer && selectedData.selectedData.task.user_id != userData.id && selectedData.selectedData.task.awarded == 0 && userData  && selectedData.selectedData.task.status != 1 && !isDatePassed(selectedData.selectedData.task.start_date)" popover-is-open="makerOffer.isOpen" ng-class="{\'label-primary\' : selectedData.selectedData.task.awarded == 1, \'expired\': selectedData.selectedData.task.status == 1}" class="btn btn-success btn-lg budget-btn" popover-placement="bottom" uib-popover-template="makerOffer.templateUrl" popover-trigger="\'outsideClick\'">\n' +
    '          <span>Budget<br>{{selectedData.selectedData.task.task_budget == 0 ? \'--OBO--\' : (selectedData.selectedData.task.task_budget | currency:\'$ \')}}\n' +
    '                    <span id="task_budget_api"></span><br> Make an Offer\n' +
    '          </span>\n' +
    '        </div>\n' +
    '        <!-- already made offer -->\n' +
    '        <div ng-if="(selectedData.myOffer) && userData && selectedData.selectedData.task.awarded != 1 && !isDatePassed(selectedData.selectedData.task.start_date)" class="btn btn-success btn-lg budget-btn">\n' +
    '          <span>Budget<br>{{selectedData.selectedData.task.task_budget == 0 ? \'--OBO--\' : (selectedData.selectedData.task.task_budget | currency:\'$ \')}}\n' +
    '                    <span id="task_budget_api"></span><br> Make an Offer\n' +
    '          </span>\n' +
    '          <md-tooltip md-delay="10" md-direction="top">\n' +
    '            Already Made Your Offer\n' +
    '          </md-tooltip>\n' +
    '        </div>\n' +
    '\n' +
    '        <!-- own task -->\n' +
    '        <div ng-if="selectedData.selectedData.task.user_id == userData.id && userData" ng-click="editTask(selectedData.selectedData.task.id, \'lg\', isDatePassed(selectedData.selectedData.task.start_date))" class="btn btn-success btn-lg budget-btn own-task" ng-class="{\'label-primary\' : selectedData.selectedData.task.awarded == 1, \'expired\': selectedData.selectedData.task.status == 1}">\n' +
    '          <span ng-if="!isDatePassed(selectedData.selectedData.task.start_date)">Edit Task<br>\n' +
    '            <span id="task_budget_api">{{selectedData.selectedData.task.task_budget == 0 ? \'--OBO--\' : (selectedData.selectedData.task.task_budget | currency:\'$ \')}}</span>\n' +
    '          </span>\n' +
    '          <span ng-if="isDatePassed(selectedData.selectedData.task.start_date)">Repost Task<br>\n' +
    '            <span id="task_budget_api">{{selectedData.selectedData.task.task_budget == 0 ? \'--OBO--\' : (selectedData.selectedData.task.task_budget | currency:\'$ \')}}</span>\n' +
    '          </span>\n' +
    '          <md-tooltip md-delay="10" md-direction="top">\n' +
    '            You Can\'t Make Offer on you own Task, Click to Post Similar Task\n' +
    '          </md-tooltip>\n' +
    '        </div>\n' +
    '\n' +
    '        <!-- already tasked -->\n' +
    '      <div ng-if="selectedData.selectedData.task.awarded == 1 && userData && selectedData.selectedData.task.user_id != userData.id" class="btn btn-success label-primary btn-lg budget-btn own-task" ng-class="{\'label-primary\' : selectedData.selectedData.task.awarded == 1, \'expired\': selectedData.selectedData.task.status == 1}">\n' +
    '        <span>Budget<br>{{selectedData.selectedData.task.task_budget == 0 ? \'OBO\' : (selectedData.selectedData.task.task_budget | currency:\'$ \')}}\n' +
    '                  <span id="task_budget_api"></span><br>\n' +
    '        </span>\n' +
    '        <md-tooltip md-delay="10" md-direction="top">\n' +
    '          Tasked Out\n' +
    '        </md-tooltip>\n' +
    '      </div>\n' +
    '      <!-- make new offer -->\n' +
    '    <div ng-if="!userData" class="btn btn-success btn-lg budget-btn own-task" ng-click="openLogin()" ng-class="{\'label-primary\' : selectedData.selectedData.task.awarded == 1, \'expired\': selectedData.selectedData.task.status == 1}">\n' +
    '      <span>Budget<br>{{selectedData.selectedData.task.task_budget == 0 ? \'OBO\' : (selectedData.selectedData.task.task_budget | currency:\'$ \')}}\n' +
    '                <span id="task_budget_api"></span><br>\n' +
    '      </span>\n' +
    '      <md-tooltip md-delay="10" md-direction="top">\n' +
    '        Login to make an offer\n' +
    '      </md-tooltip>\n' +
    '    </div>\n' +
    '    \n' +
    '     <!-- Expired -->\n' +
    '     <div ng-if="isDatePassed(selectedData.selectedData.task.start_date) && userData && selectedData.selectedData.task.user_id != userData.id && selectedData.selectedData.task.awarded == 0" ng-disabled="isDatePassed(selectedData.selectedData.task.start_date)" class="btn btn-success btn-lg budget-btn own-task">\n' +
    '      <span>Budget<br>{{selectedData.selectedData.task.task_budget == 0 ? \'OBO\' : (selectedData.selectedData.task.task_budget | currency:\'$ \')}}\n' +
    '                <span id="task_budget_api"></span><br>\n' +
    '      </span>\n' +
    '      <md-tooltip md-delay="10" md-direction="top">\n' +
    '        Completed/Expired\n' +
    '      </md-tooltip>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</div>\n' +
    '<div class="col-md-12 no-padding">\n' +
    '  <md-content layout="column">\n' +
    '    <h6 class="md-title">Skillset/Equipment requested&nbsp;<md-button ng-click="openAddTagsModal(selectedData.selectedData.task.tags)" ng-if="userData" ng-disabled="!selectedData.selectedData.task.tags.length || selectedData.selectedData.task.tags[0] === \'No Skillset Selected\'"><md-tooltip>Add tags to your profile</md-tooltip><i class="fa fa-plus-circle"></i></md-button>\n' +
    '      <md-chips ng-model="selectedData.selectedData.task.tags" readonly="true">\n' +
    '        <md-chip-template>\n' +
    '          <strong>{{$chip}}</strong>\n' +
    '        </md-chip-template>\n' +
    '      </md-chips>\n' +
    '      <md-chip ng-model="selectedData.selectedData.task.tags" ng-if="!selectedData.selectedData.task.tags.length" ng-init="selectedData.selectedData.task.tags = [\'No Skillset Selected\']"></md-chip>\n' +
    '  </h6></md-content>\n' +
    '</div>\n' +
    '      <div class="col-md-12 no-padding desc_task">\n' +
    '      <div class="col-md-12 no-padding">\n' +
    '          <h6 class="md-title">Description of Task</h6>\n' +
    '      </div>\n' +
    '      </div>\n' +
    '      <div class="about_task" id="task_description_api">{{selectedData.selectedData.task.task_description}}</div>\n' +
    '      <div class="col-md-12 no-padding tag_pics">\n' +
    '        <div class="col-md-12 no-padding task-picture" id="task_img_api">\n' +
    '          <span ng-repeat="img in selectedData.selectedData.images">\n' +
    '            <img src="{{apiURL}}/file/{{img.task_img}}" alt="{{img.task_img}}" fallback-src="" md-lightbox="">\n' +
    '          </span>\n' +
    '        </div>\n' +
    '        <div class="col-md-12 no-padding task_qa">\n' +
    '          <div class="col-md-5 no-padding">\n' +
    '              <h6 class="md-title">Task Q & A</h6>\n' +
    '          </div>\n' +
    '          <div class="col-md-7 no-padding" ng-if="current_user_id != 0 && selectedData.selectedData.task.user_id != userData.id">\n' +
    '              <a ng-click="ask_question(selectedData.selectedData.task.user_id,\'lg\')" class="btn btn-default pull-right ask-btn" ng-disabled="selectedData.selectedData.task.status == 1">Ask a Question about this Task</a>\n' +
    '          </div>\n' +
    '          <ul id="task_quiz_api">\n' +
    '            <li ng-if="selectedData.selectedData.questions" ng-repeat="row in selectedData.selectedData.questions track by $index">\n' +
    '              <a class="image_holder" ui-sref="other-profile({name: row.user_id, task: currTaskID})">\n' +
    '                <img id="quiz_user_image_api" src="{{row.user_image}}" alt="No Image" fallback-src="">\n' +
    '              </a>\n' +
    '              <div class="name_timestamp">\n' +
    '                <div class="user_name pull-left">\n' +
    '                  <a href="#" ui-sref="other-profile({name: row.user_id, task: currTaskID})" id="quiz_user_name_api">{{row.name}}</a>\n' +
    '                </div>\n' +
    '                <div class="time_stamp pull-right" id="quiz_date_ago_api" am-time-ago="row.chat_time"></div>\n' +
    '                <hr>\n' +
    '                <div class="question" ng-click="qs_ans_chat(row,\'lg\')">Q: {{row.message}}</div>\n' +
    '              </div>\n' +
    '            </li>\n' +
    '            <li ng-if="selectedData.selectedData.questions == \'\' ">\n' +
    '              No Questions asked yet.\n' +
    '            </li>\n' +
    '          </ul>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="col-md-4 no-pad-right right">\n' +
    '      <div class="pull-right">\n' +
    '        <a ui-sref="tasks"><i class="fa fa-window-close"></i></a>\n' +
    '      </div>\n' +
    '      <div class="img-holder"><img class="img-circle" id="user_image_api" src="{{selectedData.selectedData.task.user_image}}" alt="No Image" fallback-src=""></div>\n' +
    '      <h3 class="text-center user_name"><a href="" ui-sref="other-profile({name: selectedData.selectedData.task.user_id, task: currTaskID})" id="user_id_api">{{selectedData.selectedData.task.name}}</a>\n' +
    '      <div class="col-md-12 no-padding text-center user_rating">\n' +
    '        <!-- <span id="task_rating_api">\n' +
    '          <jk-rating-stars rating="selectedData.selectedData.task.rating" read-only="true" ></jk-rating-stars>\n' +
    '        </span> -->\n' +
    '\n' +
    '        <span id="task_rating_api" class="col-md-12 no-padding" uib-rating="" ng-model="selectedData.selectedData.user_info[0].rating" titles="ratingTitle" max="5" read-only="true" on-leave="overStar = null" aria-labelledby="default-rating"></span>\n' +
    '\n' +
    '      </div>\n' +
    '      <div class="col-md-12 no-padding text-center method_of_payment">\n' +
    '        <span id="paypal_active">\n' +
    '          <i class="fa fa-paypal" ng-class="selectedData.selectedData.task.paypal_active==1 && \'over-icons\'">\n' +
    '            <md-tooltip md-delay="10" md-direction="top">\n' +
    '              Paypal\n' +
    '            </md-tooltip>\n' +
    '          </i>\n' +
    '        </span>\n' +
    '\n' +
    '        <span id="stripe_active">\n' +
    '          <i class="fa fa-cc-stripe" ng-class="selectedData.selectedData.task.stripe_active==1 && \'over-icons\'">\n' +
    '            <md-tooltip md-delay="10" md-direction="top">\n' +
    '              Stripe\n' +
    '             </md-tooltip>\n' +
    '          </i>\n' +
    '        </span>\n' +
    '\n' +
    '        <span id="cash_active">\n' +
    '          <i class="fa fa-usd" ng-class="selectedData.selectedData.task.cash_active==1 && \'over-icons\'">\n' +
    '            <md-tooltip md-delay="10" md-direction="top">\n' +
    '              Cash\n' +
    '            </md-tooltip>\n' +
    '          </i>\n' +
    '        </span>\n' +
    '        <div class="text-center" id="member_since_info">Member Since {{selectedData.selectedData.task.date | date:\'dd, MMM, yyyy\'}}</div>\n' +
    '      </div>\n' +
    '      <div class="col-md-12 no-padding text-center other_task" id="other_task_link">\n' +
    '          <!-- <span>\n' +
    '              <a ng-click="transBG= !transBG" class="btn btn-default btn-small">\n' +
    '                  <span ng-if="!transBG">Show</span><span ng-if="transBG">Hide</span> Map\n' +
    '                  <md-tooltip md-delay="10" md-direction= "top">\n' +
    '                    Click here to see through the task\n' +
    '                  </md-tooltip>\n' +
    '                </a>\n' +
    '          </span> -->\n' +
    '        <span>\n' +
    '          <md-tooltip md-delay="10" md-direction="top">\n' +
    '              See all other tasks from the employer\n' +
    '          </md-tooltip>\n' +
    '        <a ng-if="userData.id != selectedData.selectedData.task.user_id" class="btn btn-default btn-small" ng-click="myTasks(\'browse_task\',\'employer\', \'lg\',selectedData.selectedData.task.user_id)">Other Tasks</a>\n' +
    '      </span>\n' +
    '        <span id="task_track_api">\n' +
    '            <md-tooltip md-delay="10" md-direction="top">\n' +
    '                Track this task to get future notifications\n' +
    '            </md-tooltip>\n' +
    '                  <a ng-if="userData.id != selectedData.selectedData.task.user_id && currentTrackedTasks.indexOf(selectedData.selectedData.task.id.toString()) >= 0" class="btn btn-default btn-small track_tasks" ng-disabled="true">Task Tracked</a>\n' +
    '                  <a ng-if="userData.id != selectedData.selectedData.task.user_id && (currentTrackedTasks.indexOf(selectedData.selectedData.task.id.toString()) == -1)" class="btn btn-default btn-small track_tasks" ng-click="trackTask(selectedData.selectedData.task.id)" ng-disabled="disabledBtn">{{trackTaskTitle}}</a>\n' +
    '        </span>\n' +
    '      </div>\n' +
    '      <div class="col-md-12 no-padding">\n' +
    '        <div uib-carousel="" active="0" interval="5000" no-wrap="false" id="carousel_slider" ng-if="selectedData.selectedData.related.length">\n' +
    '          <div uib-slide="" ng-repeat="related in selectedData.selectedData.related track by $index" index="$index">\n' +
    '              <md-list flex="">\n' +
    '                  <md-list-item class="md-3-line" ui-sref="other-profile({name: related.user_id, task: currTaskID})">\n' +
    '                    <div class="image_holder">\n' +
    '                      <img ng-src="{{related.user_image}}" style="margin:auto" width="150" heigh="150" fallback-src="">\n' +
    '                    </div>\n' +
    '                    <div class="md-list-item-text" layout="column">\n' +
    '                        <a href="#" id="related_user_name_api">{{related.name}}</a>\n' +
    '                    </div>\n' +
    '                  </md-list-item>\n' +
    '            <div class="related_task_detail">\n' +
    '              <h4 class="text-center task_title"><a ui-sref="task({id: related.id})">{{related.task_title | limitTo: 20}}<span ng-if="related.task_title.length > 20">...</span></a>\n' +
    '              <div class="col-md-12 no-paddint text-center task_due">\n' +
    '                <p>\n' +
    '                  <span id="related_task_date"></span>{{related.start_date | date:\'EEEE dd, MMM, yyyy\'}}</p></div>\n' +
    '              <p>{{related.location || "No Location Entered"}}</p>\n' +
    '              \n' +
    '            </h4></div>\n' +
    '          </md-list></div>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '        <div class="col-md-12 no-padding text-right share_task">\n' +
    '          <!--<i class="fa fa-facebook-official" aria-hidden="true" id="task_share_facebook"></i>-->\n' +
    '          <i socialshare="" socialshare-provider="facebook" socialshare-text="Taskoli" socialshare-title="{{selectedData.selectedData.task.task_title}}" socialshare-description="{{selectedData.selectedData.task.task_description}}" socialshare-url="//taskoli.com/tasks/{{selectedData.selectedData.task.id}}" class="fa fa-facebook-official" aria-hidden="true">\n' +
    '                <md-tooltip md-delay="10" md-direction="top">\n' +
    '                  Share on Facebook\n' +
    '                </md-tooltip></i>\n' +
    '          <!--<i class="fa fa-twitter-square" aria-hidden="true"></i>-->\n' +
    '          <i socialshare="" socialshare-provider="twitter" socialshare-text="{{selectedData.selectedData.task.task_description}}" socialshare-hashtags="Taskoli" socialshare-url="//taskoli.com/tasks/{{selectedData.selectedData.task.id}}" class="fa fa-twitter-square" aria-hidden="true">\n' +
    '                <md-tooltip md-delay="10" md-direction="top">\n' +
    '                  Share on Twitter\n' +
    '                </md-tooltip></i>\n' +
    '          <!--<i class="fa fa-google-plus-square" aria-hidden="true"></i>-->\n' +
    '          <i socialshare="" socialshare-provider="google" socialshare-url="//taskoli.com/tasks/{{selectedData.selectedData.task.id}}" class="fa fa-google-plus-square" aria-hidden="true">\n' +
    '                <md-tooltip md-delay="10" md-direction="top">\n' +
    '                  Share on gPlus\n' +
    '                </md-tooltip>\n' +
    '                </i>\n' +
    '        </div>\n' +
    '    </h3></div>\n' +
    '  </div></div>');
	a.put('/frontend/tasks/view/qs_ans_chat.html', '<div class="chat_popup" role="dialog">\n' +
    '  <div class="modal-header">\n' +
    '    <h5 class="modal-title">\n' +
    '      Q: {{question_data.message}}\n' +
    '      <md-button ng-click="cancel()" class="md-raised pull-right"><i class="fa fa-chevron-left" aria-hidden="true"></i> Back</md-button>\n' +
    '    </h5>\n' +
    '  </div>\n' +
    '  <div class="modal-body">\n' +
    '    <div class="col-md-12 no-padding reply_chat">\n' +
    '      <div class="reply_msg" ng-repeat="replyChat in chat_data">\n' +
    '        <div class="avatar-icon"> <img src="{{replyChat.user_image}}" fallback-src=""> </div>\n' +
    '        <div class="messages" style="padding-bottom: 18px">\n' +
    '          <div class="chatter_info"> <span class="chatter_name">{{replyChat.name}}</span>\n' +
    '            <time am-time-ago="replyChat.chat_time"></time>\n' +
    '          </div>\n' +
    '          <p>{{replyChat.message}}</p>\n' +
    '         \n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="reply_box" ng-if="current_user_id">\n' +
    '\n' +
    '      <form method="post">\n' +
    '        <div class="chat_textarea">\n' +
    '          <input type="text" ng-model="chat_text" class="form-control" placeholder="Ask a question about this task" required="">\n' +
    '          <input type="hidden" name="task_id" value="{{question_data.task_id}}">\n' +
    '          <input type="hidden" name="from" value="{{current_user_id}}">\n' +
    '          <input type="hidden" name="task_by" value="{{question_data.by_task}}">\n' +
    '          <input type="hidden" name="reply_to" value="{{question_data.id}}">\n' +
    '          <input type="hidden" name="to_id" value="{{question_data.by_task}}">\n' +
    '          <input type="submit" name="chat_submit" ng-click="submitChat(question_data.task_id,current_user_id,question_data.by_task,question_data.id,chat_text)" class="btn btn-primary" value="Send">\n' +
    '        </div>\n' +
    '      </form>\n' +
    '\n' +
    '      <div ng-if="!current_user_id" style="text-align:center">\n' +
    '        <span class="to_join">To join the conversation</span><br>\n' +
    '        <a href="#" class="btn btn-primary btn-lg signup_popup">Join Taskoli</a> <span style="margin: 10px">or</span>\n' +
    '        <a href="#" class="btn btn-primary btn-lg login_popup">Login</a>\n' +
    '      </div>\n' +
    '\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</div>');
	a.put('/frontend/tasks/view/profile.modal.html', '<!-- Modal -->\n' +
    '<!-- Modal content-->\n' +
    '<div id="user_profile" class="user_profile">\n' +
    '  <form class="form-horizontal" method="post" accept-charset="utf-8">\n' +
    '    <div class="user_info">\n' +
    '      <a><img ng-src="{{userInfo.user_image}}" alt="User Image" fallback-src=""></a>\n' +
    '      \n' +
    '      <span id="user_rating" class="col-md-12 no-padding" uib-rating="" ng-model="userInfo.rating" max="5" titles="ratingTitle" read-only="true" on-leave="overStar = null" aria-labelledby="default-rating"></span>\n' +
    '\n' +
    '      <div class="col-md-12 no-padding payment_methods">\n' +
    '        <h6>Payments</h6>\n' +
    '        <span id="paypal_active"><i class="fa fa-paypal" ng-class="userInfo.paypal_active==1 && \'over-icons\'">\n' +
    '                <md-tooltip md-z-index="9999" md-delay="10" md-direction="top">\n' +
    '              Paypal\n' +
    '            </md-tooltip></i></span>\n' +
    '\n' +
    '        <span id="stripe_active"><i class="fa fa-cc-stripe" ng-class="userInfo.stripe_active==1 && \'over-icons\'">\n' +
    '                <md-tooltip md-z-index="9999" md-delay="10" md-direction="top">\n' +
    '              Stripe\n' +
    '            </md-tooltip></i></span>\n' +
    '\n' +
    '        <span id="cash_active"><i class="fa fa-usd" ng-class="userInfo.cash_active==1 && \'over-icons\'">\n' +
    '                <md-tooltip md-z-index="9999" md-delay="10" md-direction="top">\n' +
    '              Cash\n' +
    '            </md-tooltip></i></span>\n' +
    '      </div>\n' +
    '\n' +
    '      <div class="col-md-12 no-padding peace_of_mind">\n' +
    '        <h6>Peace of Mind</h6>\n' +
    '        <span id="paypal_active"><i class="fa fa-gavel" ng-class="piece_of_mind.criminal_record==1 && \'over-icons\'">\n' +
    '          <md-tooltip md-z-index="9999" md-delay="10" md-direction="top">\n' +
    '              Criminal Record\n' +
    '            </md-tooltip></i></span>\n' +
    '        <span id="paypal_active"><i class="fa fa-balance-scale" ng-class="piece_of_mind.enhanced_criminal_record==1 && \'over-icons\'">\n' +
    '          <md-tooltip md-z-index="9999" md-delay="10" md-direction="top">\n' +
    '              Enhanced Criminal Record\n' +
    '            </md-tooltip></i></span>\n' +
    '        <span id="paypal_active"><i class="fa fa-clone" ng-class="piece_of_mind.red_seal==1 && \'over-icons\'">\n' +
    '          <md-tooltip md-z-index="9999" md-delay="10" md-direction="top">\n' +
    '              Red Seal\n' +
    '            </md-tooltip></i></span>\n' +
    '        <span id="paypal_active"><i class="fa fa-medkit" ng-class="piece_of_mind.first_aid==1 && \'over-icons\'">\n' +
    '          <md-tooltip md-z-index="9999" md-delay="10" md-direction="top">\n' +
    '              Fist Aid\n' +
    '            </md-tooltip></i></span>\n' +
    '        <span id="paypal_active"><i class="fa fa-thumbs-up" ng-class="piece_of_mind.insurance==1 && \'over-icons\'">\n' +
    '          <md-tooltip md-z-index="9999" md-delay="10" md-direction="top">\n' +
    '              Insurance\n' +
    '            </md-tooltip></i></span>\n' +
    '      </div>\n' +
    '\n' +
    '      <div class="col-md-12 no-padding peace_of_mind">\n' +
    '        <h6>Modes of Transportation</h6>\n' +
    '        <span id="paypal_active"><i class="fa fa-male over-icons">\n' +
    '          <md-tooltip md-z-index="9999" md-delay="10" md-direction="top">\n' +
    '              Walk\n' +
    '            </md-tooltip></i></span>\n' +
    '        <span id="paypal_active"><i class="fa fa-motorcycle" ng-class="transportation.bicycle==1 && \'over-icons\'">\n' +
    '          <md-tooltip md-z-index="9999" md-delay="10" md-direction="top">\n' +
    '              Bicycle\n' +
    '            </md-tooltip></i></span>\n' +
    '        <span id="paypal_active"><i class="fa fa-bus" ng-class="transportation.public==1 && \'over-icons\'">\n' +
    '          <md-tooltip md-z-index="9999" md-delay="10" md-direction="top">\n' +
    '              Public\n' +
    '            </md-tooltip></i></span>\n' +
    '        <span id="paypal_active"><i class="fa fa-car" ng-class="transportation.car==1 && \'over-icons\'">\n' +
    '          <md-tooltip md-z-index="9999" md-delay="10" md-direction="top">\n' +
    '              Car\n' +
    '            </md-tooltip></i></span>\n' +
    '        <span id="paypal_active"><i class="fa fa-truck" ng-class="transportation.truck==1 && \'over-icons\'">\n' +
    '          <md-tooltip md-z-index="9999" md-delay="10" md-direction="top">\n' +
    '              Truck\n' +
    '            </md-tooltip></i></span>\n' +
    '      </div>\n' +
    '\n' +
    '    </div>\n' +
    '    <div class="user_detail">\n' +
    '      <h3><a ng-click="viewProfile({id:userInfo.id})">{{userInfo.name}}</a></h3>\n' +
    '      <small>Last Active Time: <div am-time-ago="userInfo.last_active_time"></div></small>\n' +
    '      <div ng-cloak="">\n' +
    '        <md-content>\n' +
    '          <md-tabs md-dynamic-height="" md-border-bottom="" id="main_tabs">\n' +
    '            \n' +
    '            <md-tab label="About Me">\n' +
    '              <md-content class="md-padding">\n' +
    '                 {{userInfo.user_description || "No Information entered"}}\n' +
    '              </md-content>\n' +
    '            </md-tab>\n' +
    '\n' +
    '            <md-tab label="Skill Set">\n' +
    '              <md-content class="md-padding">\n' +
    '                <div class="col-md-12 no-padding skill_data">\n' +
    '                  <h6>Skill Set</h6>\n' +
    '                  <ul>\n' +
    '                    <li ng-repeat="skill in skills" uib-popover-html="htmlPopover" popover-trigger="\'mouseenter\'" popover-placement="right">{{skill}}</li>\n' +
    '                  </ul>\n' +
    '                </div>\n' +
    '\n' +
    '                <div class="col-md-12 no-padding skill_data">\n' +
    '                  <h6>Education</h6>\n' +
    '                  <ul>\n' +
    '                    <li ng-repeat="edu in education" uib-popover-html="htmlPopover" popover-trigger="\'mouseenter\'" popover-placement="right">{{edu}}</li>\n' +
    '                  </ul>\n' +
    '                </div>\n' +
    '\n' +
    '                <div class="col-md-12 no-padding skill_data">\n' +
    '                  <h6>Certification</h6>\n' +
    '                  <ul>\n' +
    '                    <li ng-repeat="certifications in certifications">{{certifications}}</li>\n' +
    '                  </ul>\n' +
    '                </div>\n' +
    '              </md-content>\n' +
    '            </md-tab>\n' +
    '\n' +
    '            <md-tab label="Reviews">\n' +
    '              <!--{{employer | json}}-->\n' +
    '              <md-content class="md-padding">\n' +
    '                <md-tabs md-dynamic-height="" md-border-bottom="">\n' +
    '                  <md-tab label="Employer">\n' +
    '                    <md-content class="md-padding">\n' +
    '                      <ul id="task_quiz_api">\n' +
    '                        <li ng-repeat="row in employer" ng-click="viewReviews(row.user_id)">\n' +
    '                          <div class="image_holder">\n' +
    '                            <img id="quiz_user_image_api" src="{{row.user_image}}" alt="No Image" fallback-src="">\n' +
    '                            <p>{{row.name}}</p>\n' +
    '                          </div>\n' +
    '                          <div class="name_timestamp">\n' +
    '                            <div class="user_name pull-left">\n' +
    '                              <a href="#" id="quiz_user_name_api" ng-click="viewTask(row.id)">{{row.task_title}}</a>\n' +
    '                            </div>\n' +
    '\n' +
    '                            <div class="time_stamp pull-right" id="quiz_date_ago_api" am-time-ago="row.date"></div>\n' +
    '                            <div id="user_rating" class="col-md-12 no-padding" uib-rating="" ng-model="row.points" max="5" titles="ratingTitle" read-only="true" on-leave="overStar = null" aria-labelledby="default-rating"></div>\n' +
    '                            <hr>\n' +
    '                            <div class="question">{{row.feedback || "No Feedback entered"}}</div>\n' +
    '                          </div>\n' +
    '                        </li>\n' +
    '                      </ul>\n' +
    '                    </md-content>\n' +
    '                  </md-tab>\n' +
    '                  <md-tab label="Tasker">\n' +
    '                    <md-content class="md-padding">\n' +
    '                      <ul id="task_quiz_api">\n' +
    '                        <li ng-repeat="row in tasker" ng-click="viewReviews(row.user_id)">\n' +
    '                          <div class="image_holder">\n' +
    '                            <img id="quiz_user_image_api" src="{{row.user_image}}" alt="No Image" fallback-src="">\n' +
    '                            <p>{{row.name}}</p>\n' +
    '                          </div>\n' +
    '                          <div class="name_timestamp">\n' +
    '                            <div class="user_name pull-left">\n' +
    '                              <a href="#" id="quiz_user_name_api" ng-click="viewTask(row.id)">{{row.task_title}}</a>\n' +
    '                            </div>\n' +
    '                            <div class="time_stamp pull-right" id="quiz_date_ago_api" am-time-ago="row.date"></div>\n' +
    '                            <div id="user_rating" class="col-md-12 no-padding" uib-rating="" ng-model="row.points" max="5" titles="ratingTitle" read-only="true" on-leave="overStar = null" aria-labelledby="default-rating"></div>\n' +
    '                            <hr>\n' +
    '                            <div class="question">{{row.feedback || "No Feedback entered"}}</div>\n' +
    '                          </div>\n' +
    '                        </li>\n' +
    '                      </ul>\n' +
    '                    </md-content>\n' +
    '                  </md-tab>\n' +
    '                </md-tabs>\n' +
    '\n' +
    '              </md-content>\n' +
    '            </md-tab>\n' +
    '\n' +
    '            <!-- <md-tab label="Current Tasks">\n' +
    '              <md-content class="md-padding">\n' +
    '\n' +
    '              </md-content>\n' +
    '            </md-tab> -->\n' +
    '\n' +
    '            <!-- <md-tab label="Gallery">\n' +
    '              <md-content class="md-padding">\n' +
    '                <md-tabs md-dynamic-height md-border-bottom>\n' +
    '                  <md-tab label="Tasks">\n' +
    '                    <md-content class="">\n' +
    '                      <ul id="gallery_tasks">\n' +
    '                        <li>\n' +
    '                          <div class="img_holder">\n' +
    '                            <img src="https://www.w3schools.com/css/img_lights.jpg" alt="" fallback-src>\n' +
    '                          </div>\n' +
    '\n' +
    '                          <div class="task_data">\n' +
    '                            <div class="task_title">\n' +
    '                              Task Title <span class="pull-right">2 jan 2017</span>\n' +
    '                            </div>\n' +
    '                            <div class="user_info">\n' +
    '                              <a><img alt="User Image" fallback-src="" src="/content/img/no-image.png"></a>\n' +
    '                              <span id="task_rating_api" class="col-md-12 no-padding" uib-rating ng-model="$ctrl.rating" titles="ratingTitle" max="5" read-only="true"\n' +
    '                                on-leave="overStar = null" aria-labelledby="default-rating"></span>\n' +
    '                              <span class="task-author">\n' +
    '                                <a class="user-fullname ng-binding">Hammad</a>\n' +
    '                              </span>\n' +
    '                            </div>\n' +
    '                            <div class="comments">\n' +
    '                              Employer Comments.\n' +
    '                            </div>\n' +
    '                          </div>\n' +
    '                        </li>\n' +
    '\n' +
    '                        <li>\n' +
    '                          <div class="img_holder">\n' +
    '                            <img src="https://www.w3schools.com/css/img_lights.jpg" alt="" fallback-src>\n' +
    '                          </div>\n' +
    '\n' +
    '                          <div class="task_data">\n' +
    '                            <div class="task_title">\n' +
    '                              Task Title <span class="pull-right">2 jan 2017</span>\n' +
    '                            </div>\n' +
    '                            <div class="user_info">\n' +
    '                              <a><img alt="User Image" fallback-src="" src="/content/img/no-image.png"></a>\n' +
    '                              <span id="task_rating_api" class="col-md-12 no-padding" uib-rating ng-model="$ctrl.rating" titles="ratingTitle" max="5" read-only="true"\n' +
    '                                on-leave="overStar = null" aria-labelledby="default-rating"></span>\n' +
    '                              <span class="task-author">\n' +
    '                                <a class="user-fullname ng-binding">Hammad</a>\n' +
    '                              </span>\n' +
    '                            </div>\n' +
    '                            <div class="comments">\n' +
    '                              Employer Comments.\n' +
    '                            </div>\n' +
    '                          </div>\n' +
    '                        </li>\n' +
    '                      </ul>\n' +
    '                    </md-content>\n' +
    '                  </md-tab>\n' +
    '                  <md-tab label="Events">\n' +
    '                    <md-content class="">\n' +
    '\n' +
    '                    </md-content>\n' +
    '                  </md-tab>\n' +
    '                </md-tabs>\n' +
    '              </md-content>\n' +
    '            </md-tab> -->\n' +
    '\n' +
    '          </md-tabs>\n' +
    '        </md-content>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </form>\n' +
    '</div>\n' +
    '<!-- end popup -->');
	a.put('/frontend/tasks/view/offers.html', '<div class="task_qa offer_hover_list">\n' +
    '  <ul id="task_bid_api">\n' +
    '    <li ng-repeat="bidData in selectedData.selectedData.bids">\n' +
    '      <div class="image_holder">\n' +
    '        <img src="{{bidData.user_image}}" fallback-src="">\n' +
    '      </div>\n' +
    '      <!-- {{selectedData.selectedData.task}} -->\n' +
    '      <!-- {{userData}} -->\n' +
    '      <div class="name_timestamp">\n' +
    '        <div class="user_name pull-left">\n' +
    '          <small ui-sref="other-profile({name: bidData.user_id, task: bidData.task_id})">{{bidData.name}}</small>\n' +
    '        </div>\n' +
    '        <div class="pull-right">\n' +
    '          <span id="task_rating_api" uib-rating="" ng-model="bidData.rating" max="5" titles="ratingTitle" read-only="true" on-leave="overStar = null" aria-labelledby="default-rating"></span>\n' +
    '        </div>  \n' +
    '        <small class="pull-left">{{bidData.bid_date | date:\'EEE dd, MMM, yyyy HH:MM a\'}}</small>\n' +
    '        <hr>\n' +
    '        <div id="bid_rating" class="col-md-12 no-padding">\n' +
    '          <div class="pull-left">\n' +
    '            <span>{{bidData.bid_description | limitTo: 100}}<span ng-if="bidData.bid_description.length > 100">...</span></span>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <div class="row" ng-if="selectedData.selectedData.task.user_id == userData.id">\n' +
    '          <div class="col-md-6 col-sm-12">\n' +
    '            <span class="bid-offer">{{bidData.bid_amount | currency: \'$\'}}</span>\n' +
    '          </div>\n' +
    '          <div class="col-md-6 col-sm-12">\n' +
    '            <md-button class="md-raised hire pull-right" ng-click="hire(bidData,\'md\')" id="hire_now" ng-if="selectedData.selectedData.task.user_id == userData.id && bidData.bid_status == 0">Hire</md-button>\n' +
    '            <md-button class="md-raised hire pull-right" ng-disable="" id="hire_now" ng-if="bidData.bid_status == 1">Offer Sent</md-button>\n' +
    '            <md-button class="md-raised hire pull-right" ng-disable="" id="hire_now" ng-if="bidData.bid_status == 2">Rejected</md-button>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        \n' +
    '      </div>\n' +
    '      <!-- <a ng-click="hire_user(bidData.user_id,\'lg\')" class="btn btn-default pull-right ask-btn">Hire</a> -->\n' +
    '\n' +
    '    </li>\n' +
    '  </ul>\n' +
    '</div>');
	a.put('/frontend/tasks/view/make_offers.html', '<div class="bid_popup">\n' +
    '  <h6 class="text-center">Make Your Offer</h6>\n' +
    '  <form class="form-horizontal" method="post" accept-charset="utf-8">\n' +
    '    <input type="number" autofocus="" id="amount" ng-model="maker_offer.amount" min="0" class="form-control text-center" placeholder="Enter Amount" required="">\n' +
    '    <textarea ng-model="maker_offer.message" class="form-control" required="" id="bid_desc" placeholder="Description" cols="3"></textarea>\n' +
    '    <button type="submit" ng-click="makeOffer(selectedData.selectedData.task.id, selectedData.selectedData.task.user_id, maker_offer)" value="Submit" class="btn btn-success btn-small bid-btn">Submit Offer</button>\n' +
    '  </form>\n' +
    '</div>');
	a.put('/frontend/tasks/view/hire_user.html', '<div class="askAquestion" id="ask_question" role="dialog">\n' +
    '  <div class="modal-body">\n' +
    '    <form class="form-horizontal" name="sendMessage" method="post" accept-charset="utf-8">\n' +
    '      <div class="user_info">\n' +
    '        <a href="#"><img fallback-src="" src="{{userInfo.user_image}}"></a>\n' +
    '        <span><a href="#">{{userInfo.name}}</a></span>\n' +
    '      </div>\n' +
    '      <div class="chat_submit_btn">\n' +
    '        <p>Hire User For This Task</p>\n' +
    '        <textarea autofocus="" class="form-control" rows="14" ng-model="message" name="chat_text" placeholder="any query?" onkeydown="if(event.keyCode == 13){this.form.submit();return false; }" required=""></textarea>\n' +
    '\n' +
    '          <md-button ng-click="askQuestion(selectedData.selectedData.task[0].id,selectedData.selectedData.user_info[0].user_id,selectedData.selectedData.task[0].user_id,message)" id="chat_submit" class="md-raised md-primary pull-right" ng-disabled="!message">Send</md-button>\n' +
    '          <md-button id="back_btn" ng-click="cancel()" class="md-raised pull-right"><i class="fa fa-chevron-left" aria-hidden="true"></i> Back</md-button>\n' +
    '      </div>\n' +
    '    </form>\n' +
    '  </div>\n' +
    '</div>');
	a.put('/frontend/tasks/view/ask_question.html', '<div class="askAquestion" id="ask_question" role="dialog">\n' +
    '  <div class="modal-body">\n' +
    '    <ng-form class="form-horizontal" name="sendMessage" method="post" accept-charset="utf-8" novalidate="" ng-submit="askQuestion(selectedData.selectedData.task.id,selectedData.selectedData.user_info[0].user_id,selectedData.selectedData.task.user_id,message)">\n' +
    '      <!-- <div class="user_info">\n' +
    '        <a href="#"><img fallback-src src="{{userData.photo}}"></a>\n' +
    '        <span><a href="#">{{userData.name}}</a></span>\n' +
    '      </div> -->\n' +
    '      <div class="chat_submit_btn">\n' +
    '        <h2>Ask {{selectedData.selectedData.task.name}} a question about this Task.</h2>\n' +
    '        <textarea ng-focus="true" autofocus="" class="form-control" required="" rows="5" ng-model="message" name="chat_text" placeholder="What is your question?" onkeydown="if(event.keyCode == 13){this.form.submit();return false; }" required=""></textarea>\n' +
    '\n' +
    '            <input type="hidden" name="task_id" id="ques_task_id" value="{{selectedData.selectedData.task.id}}" ng-model="selectedData.selectedData.task.id">\n' +
    '            <input type="hidden" name="from" value="{{selectedData.selectedData.user_info[0].user_id}}" ng-model="selectedData.selectedData.user_info[0].user_id">\n' +
    '            <input type="hidden" name="task_by" id="ques_user_id" value="{{selectedData.selectedData.task.user_id}}" ng-model="selectedData.selectedData.task.user_id">\n' +
    '            <input type="hidden" name="reply_to" value="0">\n' +
    '            <input type="hidden" name="to_id" value="{{selectedData.selectedData.task.user_id}}" id="ques_user_to_id" ng-model="selectedData.selectedData.task.user_id"> \n' +
    '          <md-button focus-if="" ng-enter="askQuestion(selectedData.selectedData.task.id,selectedData.selectedData.user_info[0].user_id,selectedData.selectedData.task.user_id,message)" ng-click="askQuestion(selectedData.selectedData.task.id,selectedData.selectedData.user_info[0].user_id,selectedData.selectedData.task.user_id,message)" id="chat_submit" class="md-raised md-primary pull-right" ng-disabled="!message">Send</md-button>\n' +
    '          <!-- <md-button id="back_btn" ng-click="cancel()" class="md-raised pull-right"><i class="fa fa-chevron-left" aria-hidden="true"></i> Back</md-button> -->\n' +
    '      </div>\n' +
    '    </ng-form>\n' +
    '  </div>\n' +
    '</div>');
	a.put('/frontend/tasks/view/add_tags.html', '<div class="addTags" id="add_tags" role="dialog">\n' +
    '    <div class="modal-body">\n' +
    '        <ng-form class="form-horizontal" name="addTagsForm" method="post" accept-charset="utf-8" novalidate="">\n' +
    '            <div class="chat_submit_btn">\n' +
    '                <h2>Select Tags to add into your skills</h2>\n' +
    '                <div layout="row" layout-wrap="">\n' +
    '                    <div flex="100" layout="column">\n' +
    '                        <div>\n' +
    '                            <fieldset class="tags-fieldset">\n' +
    '                                <legend class="tags-legend">These tags will be added into your skills for future alerts.</legend>\n' +
    '                                <div layout="row" layout-wrap="" flex="">\n' +
    '                                    <div flex-xs="" flex="100">\n' +
    '                                        <md-checkbox aria-label="Select All" ng-checked="isChecked()" md-indeterminate="isIndeterminate()" ng-click="toggleAll()" ng-disabled="checkAllMatches(tags, preSelected)">\n' +
    '                                            <span ng-if="isChecked()">Un-</span>Select All\n' +
    '                                        </md-checkbox>\n' +
    '                                    </div>\n' +
    '                                    <div class="tags-select-all-checkboxes" flex="25" ng-repeat="item in tags track by $index">\n' +
    '                                        <md-checkbox ng-checked="exists(item, selected)" ng-click="toggle(item, selected)" ng-disabled="exists(item, preSelected)">\n' +
    '                                            <span>{{ item }}</span>\n' +
    '                                        </md-checkbox>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </fieldset>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                \n' +
    '                <div layout="row" layout-wrap="" layout-align="end center">\n' +
    '                    <div flex-xs="" flex="15">\n' +
    '                        <md-button focus-if="" class="md-raised md-primary pull-right md-button md-ink-ripple" ng-disabled="selected.length == 0" ng-click="addTags(selected)" ng-enter="addTags(selected)">SAVE</md-button>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </ng-form>\n' +
    '    </div>\n' +
    '</div>');
	a.put('/frontend/profile/view/profile.html', '<!-- Modal -->\n' +
    '<!-- Modal content-->\n' +
    '<div id="user_profile" class="container">\n' +
    '  <form class="form-horizontal" method="post" accept-charset="utf-8">\n' +
    '    <div class="user_info col-md-3 no-pad-left">\n' +
    '      <a><img ng-src="{{userInfo.user_image}}" alt="User Image" fallback-src=""></a>\n' +
    '\n' +
    '      <span id="user_rating" class="col-md-12 no-padding" uib-rating="" ng-model="userInfo.rating" max="5" titles="ratingTitle" read-only="true" on-leave="overStar = null" aria-labelledby="default-rating"></span>\n' +
    '\n' +
    '      <div class="col-md-12 no-padding payment_methods">\n' +
    '        <h6>Payments</h6>\n' +
    '        <span id="paypal_active"><i class="fa fa-paypal" ng-class="userInfo.paypal_active==1 && \'over-icons\'">\n' +
    '                <md-tooltip md-z-index="9999" md-delay="10" md-direction="top">\n' +
    '              Paypal\n' +
    '            </md-tooltip></i></span>\n' +
    '\n' +
    '        <span id="stripe_active"><i class="fa fa-cc-stripe" ng-class="userInfo.stripe_active==1 && \'over-icons\'">\n' +
    '                <md-tooltip md-z-index="9999" md-delay="10" md-direction="top">\n' +
    '              Stripe\n' +
    '            </md-tooltip></i></span>\n' +
    '\n' +
    '        <span id="cash_active"><i class="fa fa-usd" ng-class="userInfo.cash_active==1 && \'over-icons\'">\n' +
    '                <md-tooltip md-z-index="9999" md-delay="10" md-direction="top">\n' +
    '              Cash\n' +
    '            </md-tooltip></i></span>\n' +
    '      </div>\n' +
    '      <div class="col-md-12 no-padding peace_of_mind">\n' +
    '        <h6>Peace of Mind</h6>\n' +
    '        <span id="paypal_active"><i class="fa fa-gavel" ng-class="piece_of_mind.criminal_record==1 && \'over-icons\'">\n' +
    '          <md-tooltip md-z-index="9999" md-delay="10" md-direction="top">\n' +
    '              Criminal Record\n' +
    '            </md-tooltip></i></span>\n' +
    '        <span id="paypal_active"><i class="fa fa-balance-scale" ng-class="piece_of_mind.enhanced_criminal_record==1 && \'over-icons\'">\n' +
    '          <md-tooltip md-z-index="9999" md-delay="10" md-direction="top">\n' +
    '              Enhanced Criminal Record\n' +
    '            </md-tooltip></i></span>\n' +
    '        <span id="paypal_active"><i class="fa fa-clone" ng-class="piece_of_mind.red_seal==1 && \'over-icons\'">\n' +
    '          <md-tooltip md-z-index="9999" md-delay="10" md-direction="top">\n' +
    '              Red Seal\n' +
    '            </md-tooltip></i></span>\n' +
    '        <span id="paypal_active"><i class="fa fa-medkit" ng-class="piece_of_mind.first_aid==1 && \'over-icons\'">\n' +
    '          <md-tooltip md-z-index="9999" md-delay="10" md-direction="top">\n' +
    '              Fist Aid\n' +
    '            </md-tooltip></i></span>\n' +
    '        <span id="paypal_active"><i class="fa fa-thumbs-up" ng-class="piece_of_mind.insurance==1 && \'over-icons\'">\n' +
    '          <md-tooltip md-z-index="9999" md-delay="10" md-direction="top">\n' +
    '              Insurance\n' +
    '            </md-tooltip></i></span>\n' +
    '      </div>\n' +
    '\n' +
    '      <div class="col-md-12 no-padding peace_of_mind">\n' +
    '        <h6>Modes of Transportation</h6>\n' +
    '        <span id="paypal_active"><i class="fa fa-male over-icons">\n' +
    '          <md-tooltip md-z-index="9999" md-delay="10" md-direction="top">\n' +
    '              Walk\n' +
    '            </md-tooltip></i></span>\n' +
    '        <span id="paypal_active"><i class="fa fa-motorcycle" ng-class="transportation.bicycle==1 && \'over-icons\'">\n' +
    '          <md-tooltip md-z-index="9999" md-delay="10" md-direction="top">\n' +
    '              Bicycle\n' +
    '            </md-tooltip></i></span>\n' +
    '        <span id="paypal_active"><i class="fa fa-bus" ng-class="transportation.public==1 && \'over-icons\'">\n' +
    '          <md-tooltip md-z-index="9999" md-delay="10" md-direction="top">\n' +
    '              Public\n' +
    '            </md-tooltip></i></span>\n' +
    '        <span id="paypal_active"><i class="fa fa-car" ng-class="transportation.car==1 && \'over-icons\'">\n' +
    '          <md-tooltip md-z-index="9999" md-delay="10" md-direction="top">\n' +
    '              Car\n' +
    '            </md-tooltip></i></span>\n' +
    '        <span id="paypal_active"><i class="fa fa-truck" ng-class="transportation.truck==1 && \'over-icons\'">\n' +
    '          <md-tooltip md-z-index="9999" md-delay="10" md-direction="top">\n' +
    '              Truck\n' +
    '            </md-tooltip></i></span>\n' +
    '      </div>\n' +
    '\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="user_detail col-md-6 no-pad-left">\n' +
    '      <h3>{{userInfo.name}}<small class="pull-right">Last Active Time: <div am-time-ago="userInfo.last_active_time"></div></small></h3>\n' +
    '      <div ng-cloak="">\n' +
    '        <md-content>\n' +
    '          <md-tabs md-dynamic-height="" md-border-bottom="" id="main_tabs">\n' +
    '\n' +
    '            <md-tab label="About Me">\n' +
    '              <md-content class="md-padding no-pad-left">\n' +
    '                {{userInfo.user_description || "No information entered"}}\n' +
    '              </md-content>\n' +
    '            </md-tab>\n' +
    '\n' +
    '            <md-tab label="Skill Set">\n' +
    '              <md-content class="md-padding no-pad-left">\n' +
    '                <div class="col-md-12 no-padding skill_data">\n' +
    '                  <h6>Skill Set</h6>\n' +
    '                  <ul>\n' +
    '                    <li ng-repeat="skill in skills" uib-popover-html="htmlPopover" popover-trigger="\'mouseenter\'" popover-placement="right">{{skill}}</li>\n' +
    '                  </ul>\n' +
    '                </div>\n' +
    '\n' +
    '                <div class="col-md-12 no-padding skill_data">\n' +
    '                  <h6>Education</h6>\n' +
    '                  <ul>\n' +
    '                    <li ng-repeat="edu in education" uib-popover-html="htmlPopover" popover-trigger="\'mouseenter\'" popover-placement="right">{{edu}}</li>\n' +
    '                  </ul>\n' +
    '                </div>\n' +
    '\n' +
    '                <div class="col-md-12 no-padding skill_data">\n' +
    '                  <h6>Certification</h6>\n' +
    '                  <ul>\n' +
    '                    <li ng-repeat="certifications in certifications">{{certifications}}</li>\n' +
    '                  </ul>\n' +
    '                </div>\n' +
    '              </md-content>\n' +
    '            </md-tab>\n' +
    '\n' +
    '            <!-- <md-tab label="Current Tasks">\n' +
    '              <md-content class="md-padding">\n' +
    '              </md-content>\n' +
    '            </md-tab> -->\n' +
    '          </md-tabs>\n' +
    '        </md-content>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="col-md-3 right_user_info">\n' +
    '      <md-button ng-if="user_id == userInfo.id && userInfo" class="md-raised md-primary" id="edit_profile_btn" ui-sref="edit-profile">Edit Your Profile</md-button>\n' +
    '      <!-- <md-button ng-if="user_id != userInfo.id && userData" ng-click="hire(userInfo.user_id,\'md\',\'\')" class="md-raised md-primary"\n' +
    '        id="edit_profile_btn">Hire Now</md-button>\n' +
    '      <md-button ng-if="user_id != userInfo.id && userData" ng-click="sendMessage(userInfo.id,\'lg\',\'\')" class="md-raised md-primary"\n' +
    '        id="edit_profile_btn">Send Message</md-button>\n' +
    '      <md-button ng-if="!userData" ng-click="openLogin()" class="md-raised md-primary" id="edit_profile_btn">Send Message</md-button> -->\n' +
    '      <div class="text-center">\n' +
    '        <span class="rating_qty">{{userInfo.rating || 0 | number: 1}}</span><br> <span id="user_rating" class="no-padding" uib-rating="" ng-model="userInfo.rating" max="5" titles="ratingTitle" read-only="true" on-leave="overStar = null" aria-labelledby="default-rating"></span>        <br> {{userInfo.total_rating || 0}} Reviews\n' +
    '        <br><br> {{userInfo.location}} <br><br> Member Since<br>{{userInfo.date | date:\'MMMM, yyyy\'}}\n' +
    '      </div>\n' +
    '      <!-- <div class="col-md-12 no-padding user-stats">\n' +
    '        <ul class="item-stats">\n' +
    '          <li>\n' +
    '            <span class="item-stats-value">100%</span> <span class="item-stats-name">Jobs Completed</span>\n' +
    '          </li>\n' +
    '          <li>\n' +
    '            <span class="item-stats-value">100%</span> <span class="item-stats-name">On Budget</span>\n' +
    '          </li>\n' +
    '          <li>\n' +
    '            <span class="item-stats-value">100%</span> <span class="item-stats-name">On Time</span>\n' +
    '          </li>\n' +
    '          <li>\n' +
    '            <span class="item-stats-value">55%</span> <span class="item-stats-name">Repeat Hire Rate</span>\n' +
    '\n' +
    '\n' +
    '          </li>\n' +
    '        </ul>\n' +
    '      </div> -->\n' +
    '    </div>\n' +
    '    <br>\n' +
    '    <div class="row" id="reviews">\n' +
    '      <div class="col-md-12 review_tasks">\n' +
    '        <h3>Reviews</h3>\n' +
    '        <md-content class="md-padding">\n' +
    '          <md-tabs md-dynamic-height="" md-border-bottom="">\n' +
    '            <md-tab label="Employer">\n' +
    '              <md-content class="md-padding">\n' +
    '                <ul id="task_quiz_api">\n' +
    '                  <li ng-repeat="row in employer" ui-sref="profile({id: row.tasker_id, \'#\': \'reviews\'})" ui-sref-opts="{reload: true}">\n' +
    '                    <div class="image_holder">\n' +
    '                      <img id="quiz_user_image_api" src="{{row.user_image}}" alt="No Image" fallback-src="">\n' +
    '                      <p>{{row.name}}</p>\n' +
    '                    </div>\n' +
    '                    <div class="name_timestamp">\n' +
    '                      <div class="user_name pull-left">\n' +
    '                        <a href="#" id="quiz_user_name_api" ui-sref="task({id: row.id})">{{row.task_title}}</a>\n' +
    '                      </div>\n' +
    '\n' +
    '                      <div class="time_stamp pull-right" id="quiz_date_ago_api" am-time-ago="row.date"></div>\n' +
    '                      <div id="user_rating" class="col-md-12 no-padding" uib-rating="" ng-model="row.points" max="5" titles="ratingTitle" read-only="true" on-leave="overStar = null" aria-labelledby="default-rating"></div>\n' +
    '                      <hr>\n' +
    '                      <div class="question">{{row.feedback || "No Feedback entered"}}</div>\n' +
    '                    </div>\n' +
    '                  </li>\n' +
    '                </ul>\n' +
    '              </md-content>\n' +
    '            </md-tab>\n' +
    '            <md-tab label="Tasker">\n' +
    '              <md-content class="md-padding">\n' +
    '                <ul id="task_quiz_api">\n' +
    '                  <li ng-repeat="row in tasker" ui-sref="profile({id: row.user_id, \'#\': \'reviews\'})" ui-sref-opts="{reload: true}">\n' +
    '                    <div class="image_holder">\n' +
    '                      <a ui-sref="profile({id: row.user_id})">\n' +
    '                      <img id="quiz_user_image_api" src="{{row.user_image}}" alt="No Image" fallback-src="">\n' +
    '                      </a>\n' +
    '                      <p>{{row.name}}</p>\n' +
    '                    </div>\n' +
    '                    <div class="name_timestamp">\n' +
    '                      <div class="user_name pull-left">\n' +
    '                        <a href="#" id="quiz_user_name_api" ui-sref="task({id: row.id})">{{row.task_title}}</a>\n' +
    '                      </div>\n' +
    '                      <div class="time_stamp pull-right" id="quiz_date_ago_api" am-time-ago="row.date"></div>\n' +
    '                      <div id="user_rating" class="col-md-12 no-padding" uib-rating="" ng-model="row.points" max="5" titles="ratingTitle" read-only="true" on-leave="overStar = null" aria-labelledby="default-rating"></div>\n' +
    '                      <hr>\n' +
    '                      <div class="question">{{row.feedback || "No Feedback entered"}}</div>\n' +
    '                    </div>\n' +
    '                  </li>\n' +
    '                </ul>\n' +
    '              </md-content>\n' +
    '            </md-tab>\n' +
    '          </md-tabs>\n' +
    '        </md-content>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <!-- <div class="row">\n' +
    '      <div class="col-md-12 no-padding gallery">\n' +
    '        <h4>Gallery/Portfolio</h4>\n' +
    '        <md-content class="md-padding">\n' +
    '          <md-tabs md-dynamic-height md-border-bottom>\n' +
    '            <md-tab label="Tasks">\n' +
    '              <md-content class="">\n' +
    '                <ul id="gallery_tasks">\n' +
    '                  <li>\n' +
    '                    <div class="img_holder">\n' +
    '                      <img src="https://www.w3schools.com/css/img_lights.jpg" alt="" fallback-src>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div class="task_data">\n' +
    '                      <div class="task_title">\n' +
    '                        Task Title <span class="pull-right">2 jan 2017</span>\n' +
    '                      </div>\n' +
    '                      <div class="user_info">\n' +
    '                        <a><img alt="User Image" fallback-src="" src="/content/img/no-image.png"></a>\n' +
    '                        <span id="task_rating_api" class="col-md-12 no-padding" uib-rating ng-model="userratingg" titles="ratingTitle" max="5" read-only="true"\n' +
    '                          on-leave="overStar = null" aria-labelledby="default-rating"></span>\n' +
    '                        <span class="task-author">\n' +
    '                                <a class="user-fullname ng-binding">Hammad</a>\n' +
    '                              </span>\n' +
    '                      </div>\n' +
    '                      <div class="comments">\n' +
    '                        Employer Comments.\n' +
    '                      </div>\n' +
    '                    </div>\n' +
    '                  </li>\n' +
    '\n' +
    '                  <li>\n' +
    '                    <div class="img_holder">\n' +
    '                      <img src="https://www.w3schools.com/css/img_lights.jpg" alt="" fallback-src>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div class="task_data">\n' +
    '                      <div class="task_title">\n' +
    '                        Task Title <span class="pull-right">2 jan 2017</span>\n' +
    '                      </div>\n' +
    '                      <div class="user_info">\n' +
    '                        <a><img alt="User Image" fallback-src="" src="/content/img/no-image.png"></a>\n' +
    '                        <span id="task_rating_api" class="col-md-12 no-padding" uib-rating ng-model="userratingg" titles="ratingTitle" max="5" read-only="true"\n' +
    '                          on-leave="overStar = null" aria-labelledby="default-rating"></span>\n' +
    '                        <span class="task-author">\n' +
    '                                <a class="user-fullname ng-binding">Hammad</a>\n' +
    '                              </span>\n' +
    '                      </div>\n' +
    '                      <div class="comments">\n' +
    '                        Employer Comments.\n' +
    '                      </div>\n' +
    '                    </div>\n' +
    '                  </li>\n' +
    '                </ul>\n' +
    '              </md-content>\n' +
    '            </md-tab>\n' +
    '            <md-tab label="Events">\n' +
    '              <md-content class="">\n' +
    '\n' +
    '              </md-content>\n' +
    '            </md-tab>\n' +
    '          </md-tabs>\n' +
    '        </md-content>\n' +
    '      </div>\n' +
    '    </div> -->\n' +
    '  </form>\n' +
    '</div>\n' +
    '<!-- end popup -->');
	a.put('/frontend/posttask/view/post_task.html', '<div class="popup-task" role="dialog">\n' +
    '  <div class="modal-body">\n' +
    '    <a type="button" class="close" data-dismiss="modal" aria-label="Close" ng-click="saveForm(task)">\n' +
    '      <span aria-hidden="true">&times;</span>\n' +
    '    </a>\n' +
    '    <div class="clearfix">\n' +
    '      <md-stepper id="posttask" md-linear="true" md-alternative="false" md-vertical="false" md-direction="bottom">\n' +
    '        <md-step md-label="Post Task"> \n' +
    '          <md-step-body>\n' +
    '            <form class="form-horizontal ng-pristine ng-invalid ng-invalid-required ng-valid-minlength" id="forms" method="post" enctype="multipart/form-data" name="userForm" novalidate="" ng-submit="userForm.$invalid" accept-charset="utf-8">\n' +
    '              <div class="col-md-12">\n' +
    '                <h3 class="modal-title text-center" id="myModalLabel">Hey Neighbour, What do you need help with?</h3>\n' +
    '                <label for="task_name">Give a title to your task\n' +
    '                  <i class="fa fa-exclamation-circle" aria-hidden="true">\n' +
    '                    <md-tooltip md-delay="10" md-direction="top">\n' +
    '                      For your safety and privacy please don\'t post any personal information here. eg. email, phone number, address.\n' +
    '                    </md-tooltip>\n' +
    '                  </i>\n' +
    '                </label>\n' +
    '                <div class="form-group" ng-class="{ \'has-error\' : userForm.task_title.$invalid && !userForm.task_title.$pristine }">\n' +
    '                  <input type="text" name="task_title" ng-model="task.task_title" id="task_title" class="form-control" placeholder="e.g. Clean my house" ng-minlength="10" required="">\n' +
    '                  <p ng-show="userForm.task_title.$error.minlength" class="help-block">Minimum Character Required Length: 10</p>\n' +
    '                </div>\n' +
    '                <input type="hidden" name="user_id" ng-model="task.user_id">\n' +
    '                <div class="form-group" ng-class="{ \'has-error\' : userForm.task_description.$invalid && !userForm.task_description.$pristine }">\n' +
    '                  <textarea class="form-control describe_task" name="task_description" ng-model="task.task_description" id="task_description" placeholder="I need my 3 bedroom, 2 bathroom and kitchen cleaned." rows="3" ng-minlength="25" required=""></textarea>\n' +
    '                  <p ng-show="userForm.task_description.$error.minlength" class="help-block">Minimum Character Required Length: 25</p>\n' +
    '                </div>\n' +
    '\n' +
    '                <div layout-wrap="" layout="row">\n' +
    '                  <label>What skill-set/equipment shoud the tasker have?\n' +
    '                    <i class="fa fa-exclamation-circle" aria-hidden="true">\n' +
    '                      <md-tooltip md-delay="10" md-direction="top">\n' +
    '                        Workers with this skill set/equipment will receive a notification, so you will get quotes faster.\n' +
    '                      </md-tooltip>\n' +
    '                    </i>\n' +
    '                  </label>\n' +
    '                  <br>\n' +
    '                  <md-chips flex="100" ng-model="skills" md-require-match="false" md-highlight-flags="i" filter-selected="true" md-max-chips="30" readonly="false" md-removable="true" md-enable-chip-edit="true" md-transform-chip="newTags($chip)">\n' +
    '                    <md-chip-template>\n' +
    '                      <strong>{{$chip.tag}}</strong>\n' +
    '                    </md-chip-template>\n' +
    '                    <md-autocomplete md-selected-item="skill" md-search-text="searchText" md-items="item in getMatchesForSkills(searchText)" md-item-text="item.tag" placeholder="Search Skills" md-no-cache="true">\n' +
    '                      <md-item-template>\n' +
    '                        <span md-highlight-text="searchText" md-highlight-flags="^i">{{item.tag}}</span>\n' +
    '                      </md-item-template>\n' +
    '                      <md-not-found>\n' +
    '                        No matches found.\n' +
    '                      </md-not-found>\n' +
    '                    </md-autocomplete>\n' +
    '                  </md-chips>\n' +
    '                </div>\n' +
    '\n' +
    '                <!-- <span class="character_detail"><div class=\'alert alert-danger\'>Minimum Character Required Length: 25</div></span> -->\n' +
    '                <div id="image_upload" class="form-group">\n' +
    '                  <label for="task_name">Do you have any pictures of your task?</label>\n' +
    '                  <br>\n' +
    '\n' +
    '                  <!--<input type="file" ng-model="task_img" name="task_img"  on-file-change="onFilesSelected"/>-->\n' +
    '\n' +
    '                  <input type="file" ngf-drop="upload($files)" ngf-select="upload($files)" ng-model="task_img" name="task_img" class="drop-box" ngf-drag-over-class="\'dragover\'" ngf-multiple="true" ngf-allow-dir="true" accept="image/*" ngf-pattern="\'image/*\'" ngf-max-size="20MB">\n' +
    '\n' +
    '                  <div ngf-no-file-drop="">File Drag/Drop is not supported for this browser</div>\n' +
    '                  <ul id="task_imgs" ng-if="imag_urls.length > 0">\n' +
    '                    <li ng-repeat="imag_url in imag_urls track by $index">\n' +
    '                      <img ng-src="/api/file/{{imag_url}}" md-lightbox="" md-lightbox-title="{{imag_url}}">\n' +
    '                      <a ng-click="removeFile(file)" ng-init="file = imag_url">\n' +
    '                        <i class="fa fa-times-circle-o" aria-hidden="true"></i>\n' +
    '                      </a>\n' +
    '                    </li>\n' +
    '                  </ul>\n' +
    '                  <!--<div class="dropzone" options="dzOptions" callbacks="dzCallbacks" methods="dzMethods" ng-dropzone></div>-->\n' +
    '                </div>\n' +
    '\n' +
    '                <div class="form-group">\n' +
    '                  <div class="col-md-6 no-pad-left budget_main">\n' +
    '                    <label for="task_budget">What is your budget?</label>\n' +
    '                    <div class="no-padding" ng-class="{ \'has-error\' : userForm.task_budget.$invalid && !userForm.task_budget.$pristine }">\n' +
    '                      <input type="number" name="task_budget" ng-model="task.task_budget" ng-min="0" ng-max="1000" class="form-control" id="task_budget" placeholder="$" ng-minlength="1" required="" min="0" positive="">\n' +
    '                      <p class="error" ng-show="userForm.task_budget.$error.positive">Amount should be positive number</p>\n' +
    '                      <p ng-show="userForm.task_budget.$error.max" class="help-block">Max Budget can be $1000</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-md-6 no-padding">\n' +
    '                    <label for="task_name">What time would you like the tasker to show up?</label>\n' +
    '                    <input mdc-datetime-picker="" date="true" time="true" type="text" id="datetime" placeholder="Date & Time" format="dddd, MMM, DD, YYYY hh:mm A" min-date="CurrentDate" short-time="true" ng-model="task.start_date" class="form-control md-input" readonly="readonly" required="" minute-steps="10" auto-ok="true">\n' +
    '                  </div>\n' +
    '                </div>\n' +
    '                <div class="clearfix"></div>\n' +
    '                <div class="col-md-12 no-padding">\n' +
    '                  <div class="col-md-9 no-pad-left">\n' +
    '                    <input required="" type="text" name="location" class="form-control" g-places-autocomplete="" options="autocompleteOptions" ng-model="task.task_location" placeholder="Where will this Task take place?" autocomplete="off" force-selection="true">\n' +
    '                  </div>\n' +
    '                  <div class="col-md-3 no-padding">\n' +
    '                    <a id="get_my_location" class="btn btn-default" ng-click="get_my_location()" ng-disabled="loadingLocation"><span ng-if="loadingLocation">Locating you<typer words="[\'...\']" repeat="true" type-time="200" backspace-time="200" start-delay="0"></typer></span><span ng-if="!loadingLocation">Get My Location</span></a>\n' +
    '                    <span class="map_detail"></span>\n' +
    '                  </div>\n' +
    '                </div>\n' +
    '                <div class="col-md-6 date-time no-padding">\n' +
    '                  <input type="checkbox" ng-model="task.task_sooner" name="task_sooner" ng-init="task.task_sooner=1" value="1"> I would prefer to have this task done sooner.\n' +
    '                </div>\n' +
    '                <div class="clearfix"></div>\n' +
    '\n' +
    '                <a class="pull-right" ng-click="clearForm()" id="clear_form">Clear Form</a>\n' +
    '            </div></form>\n' +
    '          </md-step-body>\n' +
    '          <md-step-actions>\n' +
    '            <div class="submit-section">\n' +
    '              <a ng-disabled="userForm.$invalid" ng-click="setPopupData();" class="btn md-blue btn-xl btn-post-tast">Post My Task!</a>\n' +
    '\n' +
    '              <!-- <a ng-click="saveForm(task)" class="btn btn-secondary-gradient btn-xl">Cancel</a> -->\n' +
    '            </div>\n' +
    '          </md-step-actions>\n' +
    '        </md-step>\n' +
    '        <md-step md-label="Review Task">\n' +
    '            <md-step-body>\n' +
    '              <div class="col-md-12" id="review_task">\n' +
    '                <h3 class="modal-title text-center" id="myModalLabel">Lets make sure everything is Correct?</h3>\n' +
    '\n' +
    '                <!-- <span class="payment_icon">\n' +
    '              <span>Choose Preferred payment:&nbsp;</span>\n' +
    '            <i ng-class="task.paypal==1 && \'over-icons\'" class="fa fa-paypal" aria-hidden="true">\n' +
    '                      <md-checkbox ng-model="task.paypal" aria-label="Paypal" ng-true-value="1"></md-checkbox>\n' +
    '                      <md-tooltip md-z-index="9999" md-delay="10" md-direction= "top">\n' +
    '                        Paypal\n' +
    '                      </md-tooltip>\n' +
    '                    </i>\n' +
    '            <i ng-class="task.stripe==1 && \'over-icons\'" class="fa fa-cc-stripe" aria-hidden="true">\n' +
    '                      <md-checkbox ng-model="task.stripe" aria-label="Stripe" ng-true-value="1"></md-checkbox>\n' +
    '                      <md-tooltip md-z-index="9999" md-delay="10" md-direction= "top">\n' +
    '                        Stripe\n' +
    '                      </md-tooltip>\n' +
    '                    </i>\n' +
    '            <i ng-class="task.cash==1 && \'over-icons\'" class="fa fa-usd" aria-hidden="true">\n' +
    '                      <md-checkbox ng-model="task.cash" aria-label="Cash" ng-true-value="1"></md-checkbox>\n' +
    '                      <md-tooltip md-z-index="9999" md-delay="10" md-direction= "top">\n' +
    '                        Cash\n' +
    '                      </md-tooltip>\n' +
    '                    </i>\n' +
    '            </span> -->\n' +
    '                <div class="col-md-12 no-padding budget_taskDue">\n' +
    '                  <div class="col-md-4 no-pad-left">\n' +
    '                    <h4 id="task_title_preveiw">{{task.task_title}}\n' +
    '                      <small class="location_of_task">{{task.task_location[\'formatted_address\']}}</small>\n' +
    '                      <small>( this will not be shown to other users. )</small>\n' +
    '                  </h4></div>\n' +
    '                  <div class="col-md-4 text-center">\n' +
    '                    <div class="btn btn-budget">Budget $\n' +
    '                      <span id="budget_amount">{{task.task_budget}}</span>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-md-4 no-pad-right">\n' +
    '                    <div class="task_due_date count_down">\n' +
    '                      <strong>Task Starts on</strong>\n' +
    '                      <br>\n' +
    '                      <span id="choosen_date">{{task.start_date | date:\'EEE dd, MMM, yyyy @ hh:MM a\'}}</span>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                </div>\n' +
    '                <div class="col-md-12 no-padding desc">\n' +
    '                  <h3>Your Description</h3>\n' +
    '                  <div class="task_desc count_down" placeholder="Task Description">{{task.task_description}}</div>\n' +
    '                </div>\n' +
    '                <input type="hidden" name="img_name" ng-model="task.img_name" ng-init="task.img_name=imag_urls">\n' +
    '                <div class="col-md-12 no-padding task_photo">\n' +
    '                  <ul id="task_imgs">\n' +
    '                    <li ng-repeat="imag_url in imag_urls track by $index">\n' +
    '                      <img src="/api/file/{{imag_url}}">\n' +
    '                    </li>\n' +
    '                  </ul>\n' +
    '                </div>\n' +
    '\n' +
    '                <div class="col-md-12 no-padding address_map">\n' +
    '                  <div style="height:200px">\n' +
    '                    <ng-map center="{{data.lat}},{{data.lng}}" zoom="12" zoom-control="true" class="map">\n' +
    '                      <marker draggable="false" position="{{data.lat}},{{data.lng}}"></marker>\n' +
    '                    </ng-map>\n' +
    '                  </div>\n' +
    '                </div>\n' +
    '            </div></md-step-body>\n' +
    '            <md-step-actions>\n' +
    '            <div class="col-md-12 no-padding text-center post_task_btn">\n' +
    '                <a class="btn md-red btn-xl edit_task" ng-click="previousStep();">Back</a>\n' +
    '                <button name="submit" class="btn btn-success btn-xl btn-post-task" ng-click="btn_post_task(task)">Post My Task!</button>\n' +
    '            </div>\n' +
    '          </md-step-actions>\n' +
    '          </md-step>\n' +
    '      </md-stepper>\n' +
    '      </div>\n' +
    '    </div></div>');
	a.put('/frontend/main/view/navbar.html', '<md-sidenav id="sidenav-right" class="md-sidenav-right" md-component-id="slide-menu" md-disable-backdrop="" md-whiteframe="4">\n' +
    '\n' +
    '      <md-toolbar class="md-theme-light-blue">\n' +
    '        <h1 class="md-toolbar-tools" ng-click="toggleRight()">Menu <i class="fa fa-chevron-right close-nav" aria-hidden="true"></i></h1>\n' +
    '      </md-toolbar>\n' +
    '      <md-content layout-margin="">\n' +
    '        <div ng-if="userData" class="text-center user_info">\n' +
    '          <img src="{{userData.photo}}" alt="" fallback-src="">\n' +
    '          <br> <strong>{{userData.name}}</strong>\n' +
    '        </div>\n' +
    '        <div ng-if="!userData" class="text-center user_info">\n' +
    '          <img src="content/img//taskoly-logo.png" fallback-src="">\n' +
    '        </div>\n' +
    '        <md-list-item ui-sref="home" ui-sref-active="active">\n' +
    '         <i class="fa fa-home" aria-hidden="true"></i> Home\n' +
    '        </md-list-item>\n' +
    '         <md-list-item ui-sref="page.about" ui-sref-active="active">\n' +
    '          <i class="fa fa-address-card" aria-hidden="true"></i> About\n' +
    '        </md-list-item>\n' +
    '        <md-list-item ui-sref="page.contactus">\n' +
    '          <i class="fa fa-envelope" aria-hidden="true"></i> Contact\n' +
    '        </md-list-item>\n' +
    '        <md-list-item ui-sref="page.how-it-works">\n' +
    '          <i class="fa fa-list-alt" aria-hidden="true"></i> How it Works\n' +
    '        </md-list-item>\n' +
    '        <md-list-item ui-sref="page.faq">\n' +
    '         <i class="fa fa-book" aria-hidden="true"></i>  FAQs\n' +
    '        </md-list-item>\n' +
    '        <!--<md-button  class="md-primary">\n' +
    '          Close this Sidenav\n' +
    '        </md-button>-->\n' +
    '      </md-content>\n' +
    '</md-sidenav>');
	a.put('/frontend/main/view/main.html', '<nav class="navbar navbar-default top_nav" role="navigation">\n' +
    '  <div class="container-fluid">\n' +
    '    <!-- Brand and toggle get grouped for better mobile display -->\n' +
    '    <div class="navbar-header">\n' +
    '      <button type="button" class="navbar-toggle toggle-nav"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>\n' +
    '      <a class="navbar-brand" ui-sref="home"> <img src="content/img/taskoly-logo.png" fallback-src=""> </a>\n' +
    '    </div>\n' +
    '    <!-- Collect the nav links, forms, and other content for toggling -->\n' +
    '    <ul class="nav navbar-nav navbar-left">\n' +
    '      <md-button ng-click="openPostTask();" class="md-raised md-primary md-button md-ink-ripple">Post a Task</md-button>\n' +
    '      <a ui-sref="tasks" ui-sref-opts="{reload: true}">{{app.user ? \'Lend a Hand\' : \'Become a Tasker\'}}</a>\n' +
    '      <!--<li><a ng-click="app.postTask()" class="btn btn-primary btn-lg login_popup">Task-it-Out</a></li>\n' +
    '      <li><a ui-sref="tasks" ui-sref-opts="{reload: true}">Lend a Hand</a></li>-->\n' +
    '    </ul>\n' +
    '    <div class="navbar-collapse" id="bs-example-navbar-collapse-1">\n' +
    '      <ul class="nav navbar-nav navbar-right" ng-if="!app.user">\n' +
    '        <li class="nav-link">\n' +
    '          <a ui-sref="page.how-it-works">How does Taskoli work?</a>\n' +
    '        </li>\n' +
    '        <li class="nav-link">\n' +
    '            <a ui-sref="page.faq">Support</a>\n' +
    '          </li>\n' +
    '        <li>\n' +
    '          <!--<a ng-click="app.openLogin()" class="login_popup">Login</a>-->\n' +
    '          <md-button ng-click="app.openLogin()" class="md-button md-raised md-blue">Login</md-button>\n' +
    '\n' +
    '        </li>\n' +
    '        <li>\n' +
    '          <!--<a ng-click="app.openReg()" class="btn btn-default signup_popup sign-topbar">Join the Tribe</a> -->\n' +
    '        </li>\n' +
    '        <!-- <li> <a ng-click="app.toggleRight()" class="toggle-nav"><i class="fa fa-bars"></i></a> </li> -->\n' +
    '      </ul>\n' +
    '      <ul class="nav navbar-nav navbar-right" ng-if="app.user">\n' +
    '        <!-- <a data-toggle="modal" data-target="#my_task_popup" id="my_task_popup_api">My Tasks</a> -->\n' +
    '        <md-menu-bar>\n' +
    '            <md-menu>\n' +
    '                <button class="md-button md-default" ng-click="loadAlerts();$mdOpenMenu();">\n' +
    '                    <i class="fa fa-rss fa-2 fa-blue"></i>\n' +
    '                </button>\n' +
    '                <md-menu-content id="alerts">\n' +
    '                  <md-content>\n' +
    '                    <md-list flex="">\n' +
    '                      <md-list-item class="md-3-line" ng-repeat="item in alerts track by $index" ng-class="{\'unseen\' : !item.seen}">\n' +
    '                        <div class="md-list-item-text" layout="column">\n' +
    '                        <a ui-sref="task({id: item.task_id})" ui-sref-opts="{reload: true}" ng-click="(item.id);">\n' +
    '                          <h3>{{item.task_title}}</h3>\n' +
    '                          <p>{{item.task_description}}</p>\n' +
    '                        </a>\n' +
    '                      </div>\n' +
    '                      </md-list-item>\n' +
    '                      <md-list-item ng-if="alerts.length == 0">\n' +
    '                          <div class="md-list-item-text text-center notification-text" layout="column">\n' +
    '                              <p>No Alerts</p>\n' +
    '                          </div>\n' +
    '                      </md-list-item>\n' +
    '                    </md-list>\n' +
    '                  </md-content>\n' +
    '                </md-menu-content>\n' +
    '              </md-menu>\n' +
    '          <md-menu>\n' +
    '            <button class="md-button md-default" ng-click="loadNotification();$mdOpenMenu();">\n' +
    '                <i class="fa fa-bell fa-2 fa-blue"></i>\n' +
    '                <span ng-if="notificationCounts" class="button__badge">{{notificationCounts}}</span>\n' +
    '            </button>\n' +
    '            <md-menu-content id="notification">\n' +
    '              <md-content>\n' +
    '                <md-list flex="">\n' +
    '                  <md-list-item class="md-3-line" ng-repeat="item in notifications" ng-class="{\'unseen\' : !item.detail.seen}">\n' +
    '                    <img ng-src="{{item.owner[0].user_image}}" class="md-avatar" alt="{{item.owner.name}}" fallback-src="">\n' +
    '                    <div class="md-list-item-text" layout="column">\n' +
    '                    <a ui-sref="task({id: item.detail.taskid})" ng-click="updateNotificationToSeen(item.detail.id);" ui-sref-options="{reload: true}">\n' +
    '                      <p><b>{{ item.owner[0].name }}</b>&nbsp;{{ item.detail.text }} <h3>{{ item.task[0].task_title | limitTo: 20}}\n' +
    '                        <span ng-if="item.task[0].task_title.length >= 20">...</span></h3></p>\n' +
    '                        <p ng-if="item.detail.type==\'hired\'">Please <b>Accept</b> or <b>Decline</b> this task.</p>\n' +
    '                        <p ng-if="item.detail.type==\'rating\'">Please click here to see the review.</p>\n' +
    '                    </a>\n' +
    '                  </div>\n' +
    '                  <div class="md-list-item-text align-center text-center" layout="column">\n' +
    '                      <div ng-if="item.detail.type==\'message\'">\n' +
    '                        <i class="fa fa-envelope over-icons"></i>\n' +
    '                        <button ui-sref="message({id: item.task[0].id})" ui-sref-opts="{reload: true}" ng-click="updateNotificationToSeen(item.detail.id);">Read</button>\n' +
    '                      </div>\n' +
    '                      <div ng-if="item.detail.type==\'expired\'">\n' +
    '                          <i class="fa fa-warning over-icons"></i>\n' +
    '                          <button ng-click="editTask(item.task[0].id, \'lg\', \'repost\');updateNotificationToSeen(item.detail.id);">Repost</button>\n' +
    '                      </div>\n' +
    '                      <i class="fa fa-money over-icons" ng-if="item.detail.type==\'offer\'"></i>\n' +
    '                      <i class="fa fa-question-circle over-icons" ng-if="item.detail.type==\'question\'"></i>\n' +
    '                      <div ng-if="item.detail.type==\'hired\'">\n' +
    '                          <i class="fa fa-thumbs-up over-icons"></i>\n' +
    '                          <button ng-click="my_tasks_as_tasker(current_user_id, \'tasker\', \'lg\');updateNotificationToSeen(item.detail.id);">Open</button>\n' +
    '                      </div>\n' +
    '                      <div ng-if="item.detail.type==\'accept\'">\n' +
    '                          <i class="fa fa-thumbs-up over-icons"></i>\n' +
    '                          <button ui-sref="message({id: item.task[0].id})" ui-sref-opts="{reload: true }" ng-click="updateNotificationToSeen(item.detail.id);">Connect</button>\n' +
    '                      </div>\n' +
    '                      <div ng-if="item.detail.type==\'completed\'">\n' +
    '                          <i class="fa fa-thumbs-up over-icons"></i>\n' +
    '                          <button ng-click="my_tasks_as_amployer(current_user_id,\'employer\', \'lg\');updateNotificationToSeen(item.detail.id);">Review</button>\n' +
    '                      </div>\n' +
    '                      <div ng-if="item.detail.type==\'rating\'">\n' +
    '                          <i class="fa fa-thumbs-up over-icons"></i>\n' +
    '                          <button ui-sref="profile({id: item.detail.owner_user, \'#\': \'reviews\'})" ui-sref-opts="{reload: true}" ng-click="updateNotificationToSeen(item.detail.id);">View</button>\n' +
    '                      </div>\n' +
    '                      \n' +
    '                  </div>\n' +
    '                  </md-list-item>\n' +
    '                </md-list>\n' +
    '              </md-content>\n' +
    '            </md-menu-content>\n' +
    '          </md-menu>\n' +
    '          <md-menu>\n' +
    '              <button class="md-button md-default" ng-click="loadMessages();$mdOpenMenu();">\n' +
    '                  <i class="fa fa-comment fa-2 fa-blue"></i>\n' +
    '                  <span ng-if="messageCounts" class="button__badge">{{messageCounts}}</span>\n' +
    '              </button>\n' +
    '              <md-menu-content id="notification">\n' +
    '                <md-content>\n' +
    '                  <md-list flex="">\n' +
    '                    <md-list-item class="md-3-line" ng-repeat="item in messages track by $index" ng-class="{\'unseen\' : !item.seen}">\n' +
    '                      <img ng-src="{{item.user_image}}" class="md-avatar" alt="{{item.name}}" fallback-src="">\n' +
    '                      <div class="md-list-item-text" layout="column">\n' +
    '                      <a ui-sref="message({id: item.task_id})" ui-sref-opts="{reload: true }" ng-click="updateMessageToSeen(item.id);">\n' +
    '                        <h3>{{item.name}}</h3>\n' +
    '                        <p>{{item.message}}</p>\n' +
    '                      </a>\n' +
    '                    </div>\n' +
    '                    </md-list-item>\n' +
    '                    <md-list-item ng-if="messages.length == 0">\n' +
    '                        <div class="md-list-item-text text-center notification-text" layout="column">\n' +
    '                            <p>No Messages</p>\n' +
    '                        </div>\n' +
    '                    </md-list-item>\n' +
    '                  </md-list>\n' +
    '                </md-content>\n' +
    '                <md-button ui-sref="messages" ui-sref-opts="{reload: true}" class="md-blue view-messages">View all messages</md-button>\n' +
    '              </md-menu-content>\n' +
    '            </md-menu>\n' +
    '            <button class="md-button md-raised" ng-click="my_tasks_as_amployer(current_user_id,\'employer\', \'lg\');">\n' +
    '              My Tasks\n' +
    '            </button>\n' +
    '            <!-- <md-menu-content>\n' +
    '              <md-menu-item>\n' +
    '                <md-menu-item>\n' +
    '                  <md-button ng-click="my_tasks_as_amployer(current_user_id,\'employer\', \'lg\');">View as Employer</md-button>\n' +
    '                </md-menu-item>\n' +
    '                <md-menu-item>\n' +
    '                  <md-button ng-click="my_tasks_as_tasker(current_user_id,\'tasker\', \'lg\');">View as Tasker</md-button>\n' +
    '                </md-menu-item>\n' +
    '              </md-menu-item>\n' +
    '            </md-menu-content> -->\n' +
    '            <span ui-sref="my-profile({name: app.user.id})" ui-sref-opts="{reload: true}" class="nav-profile-photo img-circle">\n' +
    '              <img ng-src="{{app.user.photo}}" fallback-src="">\n' +
    '            </span>\n' +
    '            <!-- <md-menu-content>\n' +
    '              <md-menu-item>\n' +
    '                <md-menu-item>\n' +
    '                  <md-button ui-sref="my-profile({name: app.user.id})" ui-sref-opts="{reload: true}">View Profile</md-button>\n' +
    '                </md-menu-item>\n' +
    '                <md-menu-item>\n' +
    '                  <md-button ui-sref="edit-profile" ui-sref-opts="{reload: true}">Edit Profile</md-button>\n' +
    '                </md-menu-item>\n' +
    '                <md-menu-item>\n' +
    '                  <md-button ui-sref="messages" ui-sref-opts="{reload: true}">Messages</md-button>\n' +
    '                </md-menu-item>\n' +
    '                <!-- <md-menu-item>\n' +
    '                  <md-button>Membership</md-button>\n' +
    '                </md-menu-item>\n' +
    '              </md-menu-item>\n' +
    '            </md-menu-content> -->\n' +
    '          <!--<a ng-click="app.logout()" class="btn btn-default signup_popup sign-topbar">Logout</a>-->\n' +
    '          <md-button ng-click="app.logout()" class="md-raised md-red">Logout</md-button>\n' +
    '          <!-- <i ng-click="app.toggleRight()" class="fa fa-bars signup_popup sign-topbar"></i> -->\n' +
    '        </md-menu-bar>\n' +
    '      </ul>\n' +
    '\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</nav>');
	a.put('/frontend/main/view/footer.html', '<section id="footer">\n' +
    '    <div class="container">\n' +
    '        <div class="row">\n' +
    '            <div class="col-md-3">\n' +
    '                    <h6>Account</h6>\n' +
    '                <ul class="footer-links">\n' +
    '                    <li ng-if="!userData">\n' +
    '                        <a href="#" class="signup_popup" ng-click="openReg()">Sign Up</a>\n' +
    '                    </li>\n' +
    '                    <li ng-if="!userData">\n' +
    '                        <a href="#" class="login_popup" ng-click="openLogin()">Login</a>\n' +
    '                    </li>\n' +
    '                    <li ng-if="userData">\n' +
    '                       <a href="#" ui-sref="my-profile({name: userData.id})">View Profile</a>\n' +
    '                    </li>\n' +
    '                    <li ng-if="userData">\n' +
    '                        <a href="#" ui-sref="edit-profile({name: userData.id})">Edit Profile</a>\n' +
    '                    </li>\n' +
    '                </ul>\n' +
    '            </div>\n' +
    '            <div class="col-md-3">\n' +
    '                <h6>About</h6>\n' +
    '                <ul class="footer-links">\n' +
    '                    <li>\n' +
    '                        <a ui-sref="page.about">About Us</a>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <a ui-sref="page.contactus">Contact</a>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <a ui-sref="page.how-it-works">How it works</a>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <a ui-sref="page.faq">FAQs</a>\n' +
    '                    </li>\n' +
    '\n' +
    '                </ul>\n' +
    '            </div>\n' +
    '            <div class="col-md-3">\n' +
    '                <h6>Support</h6>\n' +
    '                <ul class="footer-links">\n' +
    '                    <!-- <li>\n' +
    '                        <a ui-sref="page.rules">Marketplace Rules</a>\n' +
    '                    </li> -->\n' +
    '                    <li>\n' +
    '                        <a ui-sref="page.terms">Terms and Conditions</a>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <a ui-sref="page.policy">Privacy Policy</a>\n' +
    '                    </li>\n' +
    '                </ul>\n' +
    '            </div>\n' +
    '            <div class="col-md-3">\n' +
    '                <h6>Stay connected!</h6>\n' +
    '                <ul class="social-links list-inline">\n' +
    '                    <li>\n' +
    '                        <a href="https://www.facebook.com/Taskoly-1656040688005545/" target="_blank">\n' +
    '                            <i class="fa fa-facebook-official"></i>\n' +
    '                        </a>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <a href="https://twitter.com/Taskoli?lang=en" target="_blank">\n' +
    '                            <i class="fa fa-twitter-square"></i>\n' +
    '                        </a>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <a href="https://plus.google.com/104238048138791457671/posts?hl=en-GB" target="_blank">\n' +
    '                            <i class="fa fa-google-plus-square"></i>\n' +
    '                        </a>\n' +
    '                    </li>\n' +
    '                </ul>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="row">\n' +
    '                <div class="col-md-12">\n' +
    '                    Copyright© 2018 Taskoli\n' +
    '                </div>\n' +
    '            </div>\n' +
    '    </div>\n' +
    '    \n' +
    '</section>');
	a.put('/frontend/messages/view/send_message.html', '<!-- Modal -->\n' +
    '<div id="sendMessage" role="dialog">\n' +
    '      <div class="modal-header">\n' +
    '        <h4>Private Message</h4>\n' +
    '      </div>\n' +
    '\n' +
    '        <form method="post" class="form-horizontal" ng-submit="">\n' +
    '      <div class="modal-body col-md-12">\n' +
    '        <textarea class="form-control" ng-model="MsgData.message" name="chat_text" placeholder="Ask a question about this task" onkeydown="if (event.keyCode == 13) { this.form.submit(); return false; }" required=""></textarea>\n' +
    '        <input type="hidden" ng-model="MsgData.task_id" name="task_id" ng-init="MsgData.task_id = taskdata.id">\n' +
    '        <input type="hidden" ng-model="MsgData.from_id" name="from" ng-init="MsgData.from_id = current_user_id">\n' +
    '        <input type="hidden" ng-model="MsgData.to_id" name="to" ng-init="MsgData.to_id = sendUserId">\n' +
    '      </div>\n' +
    '      <div class="modal-footer">\n' +
    '        <md-button class="md-raised md-primary" ng-click="message(MsgData)">Send</md-button>\n' +
    '      </div>\n' +
    '      <form></form></div>');
	a.put('/frontend/messages/view/messages.html', '<!-- Modal -->\n' +
    '<!-- Modal content-->\n' +
    '<div id="messages">\n' +
    '  <div class="col-md-12 fill app-body">\n' +
    '    <aside ng-if="!chat_list" class="col-md-3 no-padding" id="chat-nav">\n' +
    '      <div class="no-data-found">\n' +
    '          <i class="fa fa-exclamation-triangle" aria-hidden="true"></i> No Message Found\n' +
    '      </div>\n' +
    '    </aside>\n' +
    '\n' +
    '    <aside ng-if="chat_list" class="col-md-3 no-padding" id="chat-nav">\n' +
    '      <div class="search-content" id="search_content">\n' +
    '        <input class="form-control" name="detailed_search" id="detailed_search" type="text" placeholder="Search..." ng-model="search.detailed_search" ng-model-options="{ debounce: 500 }">\n' +
    '          <!-- <input class="form-control" placeholder="Search"> -->\n' +
    '      </div>\n' +
    '        \n' +
    '      <div class="chat-nav-body">\n' +
    '        <ul class="chat-list proper">\n' +
    '          <li class="" ng-repeat="chat in chat_list" ui-sref="message({id: chat.task_id})" ui-sref-opts="{reload:true}">\n' +
    '            <div class="cover-img">\n' +
    '              <img src="{{chat.user_image}}" alt="" fallback-src="">\n' +
    '            </div>\n' +
    '            <div class="chat-list-name-span">\n' +
    '              <h3 class="name"><a ui-sref="message({id: chat.task_id})" ui-sref-opts="{reload:true}">{{chat.task_title}}</a></h3>\n' +
    '              <span class="date"> {{chat.chat_time | date:\'dd/M/yy\'}}</span>\n' +
    '            </div>\n' +
    '            <div class="chat-list-message">\n' +
    '              <span class="topic"><span class="chat-author">{{chat.name}}:</span> {{chat.message}}<br></span>\n' +
    '              <!-- <span class="latest-story" >Muhammad Ameer: Thanks</span> -->\n' +
    '            </div>\n' +
    '          </li>\n' +
    '    \n' +
    '        </ul>\n' +
    '      </div>\n' +
    '    </aside>\n' +
    '    <div ui-view="message"></div> \n' +
    '    <div ng-if="currentState.parent != \'messages\'" class="col-md-9 no-padding" id="chat-main-body">\n' +
    '      <div class="no-data-found">\n' +
    '          <i class="fa fa-exclamation-triangle" aria-hidden="true"></i> No Chat Selected\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</div>\n' +
    '<!-- end popup -->');
	a.put('/frontend/messages/view/message.html', '<div ng-if="chat_conversation" class="col-md-9 no-padding" id="chat-main-body">\n' +
    '      <div class="chat-nav-header">\n' +
    '        <div class="chat-name">\n' +
    '            <span>{{task_info.task_title}}<span class="user-time-data"> {{task_info.start_date | date:\'dd, MMM, yyyy h:mm a\' }}</span></span>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '      <div class="room-chat-area-content">\n' +
    '        <ul class="story-body" id="story-body">\n' +
    '          <li ng-repeat="chat in chat_conversation" ng-class="chat.from_id == user_id ? \'me\' : \'\'">\n' +
    '            <div class="cover-img">\n' +
    '              <img src="{{chat.user_image}}" alt="" fallback-src="">\n' +
    '            </div>\n' +
    '            <h4 class="chat-author">{{chat.name}}</h4>\n' +
    '            <span class="timestamp">{{chat.chat_time | date:\'dd/MM/yyyy hh:mm a\'}}</span>\n' +
    '            <h4 class="story-message-text"> {{chat.message}}</h4>\n' +
    '          </li>\n' +
    '        </ul>\n' +
    '        <div class="composer-panel">\n' +
    '            <div class="is-typing">\n' +
    '                <small ng-if="typing">{{chat_conversation[0].name}} is Typing...</small>\n' +
    '            </div>\n' +
    '          <span class="msg-composer-section">\n' +
    '            <input type="text" ng-model="msg.message" class="form-control" required="">\n' +
    '            <input type="hidden" ng-model="msg.task_id" ng-init="msg.task_id = chat_conversation ? chat_conversation[0].task_id : userData.sendUserID || -1">\n' +
    '            <input type="hidden" ng-model="msg.from_id" ng-init="msg.from_id = user_id">\n' +
    '            <input type="hidden" ng-model="msg.to_id" ng-init="msg.to_id = chat_conversation ? chat_conversation[0].awarded_to == user_id ? chat_conversation[0].awarded_by : chat_conversation[0].awarded_to : -1">\n' +
    '          </span>\n' +
    '          <span class="msg-send-section">\n' +
    '            <md-button class="md-raised md-primary send" ng-click="message(msg)">Send</md-button>\n' +
    '          </span>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '</div>\n' +
    '<div ng-if="!chat_conversation.length" class="col-md-9 no-padding" id="chat-main-body">\n' +
    '    <div class="no-data-found">\n' +
    '        <i class="fa fa-exclamation-triangle" aria-hidden="true"></i> No Chat Selected\n' +
    '    </div>\n' +
    '  </div>');
	a.put('/frontend/home/view/home.html', '<div id="home">\n' +
    '      <div class="home-wrapper">\n' +
    '      <div class="one-sixth-screen xs-one-third-screen position-relative">\n' +
    '                  <div class="col-md-12 col-sm-12 col-xs-12 no-padding slider-typography text-center">\n' +
    '                      <div class="slider-text-middle-main">\n' +
    '                          <div class="slider-text-middle">\n' +
    '                              <div class="slider-content tz-border xs-text-center" id="tz-br-1">\n' +
    '                                    <h1 class="title">We are <typer words="titles" type-time="200" backspace-time="200" start-delay="1500" highlight-background="#60ba25" shuffle="true" repeat="true"></typer>\n' +
    '                                    </h1>\n' +
    '                                    <h3 class="sub-title">Introducing the first online marketplace in <span class="bg-blue"><b>Victoria</b></span> for hiring trusted neighbours to do all your TASKS.<br><br>Get offers immediately. </h3>\n' +
    '                                    <a ng-click="postTask()" class="btn btn-custom btn-lg btn-opaq post-btn">Post a Task</a> <a ui-sref="tasks" class="btn btn-custom btn-lg btn-opaq lend-btn">Browse Tasks</a>\n' +
    '                          </div>\n' +
    '                      </div>\n' +
    '                  </div>\n' +
    '              </div>\n' +
    '      </div>\n' +
    '</div>\n' +
    '<!-- <video id="home-bg-vid" src="/content/vid/home.mp4" autoplay></video> --></div>');
	a.put('/frontend/hire/view/hire.html', '<div id="hire">\n' +
    '  <form class="form-horizontal" method="post" accept-charset="utf-8">\n' +
    '    <p>Contact user about your work opporunity.</p>\n' +
    '\n' +
    '    <h3>Hire Now</h3>\n' +
    '    <textarea name="" id="" ng-model="hireData.message" rows="6" class="form-control"></textarea>\n' +
    '    <p>Offer: </p>\n' +
    '    <md-radio-group ng-model="hireData.rate" class="set_rate" ng-init="hireData.rate = \'fixed\'">\n' +
    '      <md-radio-button value="fixed"> Set Fixed Price </md-radio-button>\n' +
    '    \n' +
    '    <input type="number" name="task_budget" ng-model="hireData.task_budget" ng-min="10" ng-max="1000" class="form-control" id="task_budget" ng-minlength="1" required="" ng-value="updateBidData.bid_amount" readonly="readonly" ng-init="hireData.task_budget = updateBidData.bid_amount">\n' +
    '\n' +
    '    <md-checkbox ng-model="updateBidData.bid" aria-label="Checkbox 1" ng-checked="true">\n' +
    '      Please send me bids from other freelancers if my task is not accepted.\n' +
    '    </md-checkbox>\n' +
    '    <input type="hidden" name="task_id" ng-value="updateBidData.task_id" ng-model="hireData.task_id" ng-init="hireData.task_id = updateBidData.task_id">\n' +
    '    <input type="hidden" name="awarded_by" ng-value="userData.id" ng-model="hireData.awarded_by" ng-init="hireData.awarded_by = userData.id">\n' +
    '    <input type="hidden" name="awarded_to" ng-value="updateBidData.user_id" ng-model="hireData.awarded_to" ng-init="hireData.awarded_to = updateBidData.user_id">\n' +
    '    <input type="hidden" name="awarded_name" ng-value="updateBidData.name" ng-model="hireData.awarded_name" ng-init="hireData.awarded_name = updateBidData.name">\n' +
    '\n' +
    '    <md-button class="md-raised md-primary" id="hire_now" ng-click="hire_user(hireData)">Hire {{updateBidData.name}}</md-button>\n' +
    '    <p>By clicking the button, you have read and agree to our <a ui-sref="page.terms">Terms & Conditions</a> and <a ui-sref="page.policy">Privacy Policy</a>.</p>\n' +
    '  </md-radio-group></form>\n' +
    '</div>');
	a.put('/frontend/directives/templates/lightbox.html', '<md-dialog class="lightbox-image" aria-label="Screenshot">\n' +
    '        <md-toolbar>\n' +
    '          <div class="md-toolbar-tools">\n' +
    '            <h2 ng-if="title" ng-bind="title"></h2>\n' +
    '            <span flex=""></span>\n' +
    '            <md-button class="md-icon-button" ng-click="cancel()">\n' +
    '                <i aria-label="Close dialog" class="fa fa-times icon-static" aria-hidden="true"></i>\n' +
    '            </md-button>\n' +
    '          </div>\n' +
    '        </md-toolbar>\n' +
    '        <md-dialog-content>\n' +
    '            <img ng-src="{{image}}" alt="{{title}}" class="taskoli-image" fallback-src="">\n' +
    '        </md-dialog-content>\n' +
    '      </md-dialog>');
	a.put('/frontend/editTask/view/editTask.html', '<div class="row popup-task" role="dialog">\n' +
    '  <div class="modal-body">\n' +
    '    <div class="clearfix">\n' +
    '      <md-stepper id="posttask" md-linear="true" md-alternative="false" md-vertical="false" md-direction="bottom">\n' +
    '        <md-step md-label="Post Task">\n' +
    '          <md-step-body>\n' +
    '            <form class="form-horizontal ng-pristine ng-invalid ng-invalid-required ng-valid-minlength" id="forms" method="post" enctype="multipart/form-data" name="userForm" novalidate="" ng-submit="userForm.$invalid" accept-charset="utf-8">\n' +
    '              <div class="col-md-12">\n' +
    '                <h3 class="modal-title text-center" id="myModalLabel">{{post_status == \'repost\' ? \'Repost Task\' : \'Edit Task\'}}</h3>\n' +
    '                <label for="task_name">Edit title of your task</label>\n' +
    '                <div class="form-group" ng-class="{ \'has-error\' : userForm.task_title.$invalid && !userForm.task_title.$pristine }">\n' +
    '                  <input type="text" name="task_title" ng-model="taskPostData.task_title" id="task_title" class="form-control" placeholder="e.g. Clean my house" ng-minlength="10" required="">\n' +
    '                  <p ng-show="userForm.task_title.$error.minlength" class="help-block">Minimum Character Required Length: 10</p>\n' +
    '                </div>\n' +
    '                <input type="hidden" name="id" ng-model="taskPostData.id">\n' +
    '                <input type="hidden" name="user_id" ng-model="taskPostData.user_id" ng-init="taskPostData.user_id = user_id">\n' +
    '                <div class="form-group" ng-class="{ \'has-error\' : userForm.task_description.$invalid && !userForm.task_description.$pristine }">\n' +
    '                  <textarea class="form-control describe_task" name="task_description" ng-model="taskPostData.task_description" id="task_description" placeholder="Let\'s describe your Task in more details. (better desriptions recieve better offers.)" rows="3" ng-minlength="25" required=""></textarea>\n' +
    '                  <p ng-show="userForm.task_description.$error.minlength" class="help-block">Minimum Character Required Length: 25</p>\n' +
    '                </div>\n' +
    '                <div layout-wrap="" layout="row">\n' +
    '                  <label>What skill-set/equipment shoud the tasker have?\n' +
    '                    <i class="fa fa-exclamation-circle" aria-hidden="true">\n' +
    '                      <md-tooltip md-delay="10" md-direction="top">\n' +
    '                        Workers with this skill set/equipment will receive a notification, so you will get quotes faster.\n' +
    '                      </md-tooltip>\n' +
    '                    </i>\n' +
    '                  </label>\n' +
    '                  <br>\n' +
    '                  <md-chips flex="100" ng-model="taskPostData.tags" md-require-match="false" md-highlight-flags="i" filter-selected="true" md-max-chips="30" readonly="false" md-removable="true" md-enable-chip-edit="true" md-transform-chip="newTags($chip)">\n' +
    '                    <md-chip-template>\n' +
    '                      <strong>{{$chip.tag}}</strong>\n' +
    '                    </md-chip-template>\n' +
    '                    <md-autocomplete md-selected-item="skill" md-search-text="searchText" md-items="item in getMatchesForSkills(searchText)" md-item-text="item.tag" placeholder="Search Skills" md-no-cache="true">\n' +
    '                      <md-item-template>\n' +
    '                        <span md-highlight-text="searchText" md-highlight-flags="^i">{{item.tag}}</span>\n' +
    '                      </md-item-template>\n' +
    '                      <md-not-found>\n' +
    '                        Add a new Tag...\n' +
    '                      </md-not-found>\n' +
    '                    </md-autocomplete>\n' +
    '                  </md-chips>\n' +
    '                </div>\n' +
    '                <div id="image_upload" class="form-group">\n' +
    '                  <label for="task_name">Do you have any pictures of your task?</label>\n' +
    '                  <br>\n' +
    '\n' +
    '                  <!--<input type="file" ng-model="task_img" name="task_img"  on-file-change="onFilesSelected"/>-->\n' +
    '\n' +
    '                  <input type="file" ngf-drop="upload($files)" ngf-select="upload($files)" ng-model="task_img" name="task_img" class="drop-box" ngf-drag-over-class="\'dragover\'" ngf-multiple="true" ngf-allow-dir="true" accept="image/*" ngf-pattern="\'image/*\'" ngf-max-size="20MB">\n' +
    '\n' +
    '                  <div ngf-no-file-drop="">File Drag/Drop is not supported for this browser</div>\n' +
    '                  <ul id="task_imgs">\n' +
    '                    <li ng-repeat="imag_url in taskPostData.images">\n' +
    '                      <img ng-src="/api/file/{{imag_url.task_img}}" fallback-src="" md-lightbox="" md-lightbox-title="{{imag_url}}">\n' +
    '                      <a ng-click="removeFile(file)" ng-init="file = imag_url.task_img">\n' +
    '                        <i class="fa fa-times-circle-o" aria-hidden="true"></i>\n' +
    '                      </a>\n' +
    '                    </li>\n' +
    '                  </ul>\n' +
    '                  <!--<div class="dropzone" options="dzOptions" callbacks="dzCallbacks" methods="dzMethods" ng-dropzone></div>-->\n' +
    '                </div>\n' +
    '\n' +
    '\n' +
    '                <div class="form-group">\n' +
    '                  <div class="col-md-6 no-pad-left budget_main">\n' +
    '                    <label for="task_budget">Edit your budget</label>\n' +
    '                    <div class="no-padding" ng-class="{ \'has-error\' : userForm.task_budget.$invalid && !userForm.task_budget.$pristine }">\n' +
    '                      <input type="number" name="task_budget" ng-model="taskPostData.task_budget" ng-min="0" ng-max="1000" class="form-control" id="task_budget" placeholder="$" ng-minlength="1" required="" positive="" min="0">\n' +
    '                      <p class="error" ng-show="userForm.task_budget.$error.positive">Amount should be positive number</p>\n' +
    '                      <p ng-show="userForm.task_budget.$error.max" class="help-block">Max Budget can be $1000</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="col-md-6 no-padding">\n' +
    '                    <label for="task_name">What time would you like the tasker to show up?</label>\n' +
    '                    <input mdc-datetime-picker="" date="true" time="true" type="text" id="datetime" placeholder="Date & Time" format="dddd, MMM, DD, YYYY hh:mm A" min-date="CurrentDate" short-time="true" ng-model="taskPostData.start_date" class="form-control md-input" readonly="readonly" required="" minute-steps="10" auto-ok="true">\n' +
    '                  </div>\n' +
    '                </div>\n' +
    '                <!-- <span class="budget_detail"><div class=\'alert alert-danger\'>Minimum Character Required Length: 1 </div></span> -->\n' +
    '                <!-- <span class="dateTime_detail"><div class=\'alert alert-danger\'>Select DATE & TIME.</div></span> -->\n' +
    '                <br>\n' +
    '                <div class="col-md-12 no-padding">\n' +
    '                  <div class="col-md-9 no-pad-left">\n' +
    '                    <input type="text" name="location" class="form-control" g-places-autocomplete="" options="autocompleteOptions" ng-model="taskPostData.task_location" placeholder="Were will this Task take place?" autocomplete="off" force-selection="true" required="">\n' +
    '                  </div>\n' +
    '                  <div class="col-md-3 no-padding">\n' +
    '                    <a id="get_my_location" class="btn btn-default" ng-click="get_my_location()">Get My Location</a>\n' +
    '                    <span class="map_detail"></span>\n' +
    '                  </div>\n' +
    '                </div>\n' +
    '                <div class="clearfix"></div>\n' +
    '                <div class="col-md-6 date-time no-padding">\n' +
    '                  <input type="checkbox" ng-model="taskPostData.task_sooner" name="task_sooner"> I would prefer to have this task done sooner.\n' +
    '                </div>\n' +
    '\n' +
    '            </div></form>\n' +
    '          </md-step-body>\n' +
    '          <md-step-actions>\n' +
    '            <div class="col-md-12 text-center">\n' +
    '              <a ng-disabled="userForm.$invalid" ng-click="setPopupData(taskPostData)" class="btn md-blue btn-xl btn-post-tast">Post My Task!</a>\n' +
    '            </div>\n' +
    '          </md-step-actions>\n' +
    '\n' +
    '        </md-step>\n' +
    '        <md-step md-label="Review Task">\n' +
    '          <md-step-body>\n' +
    '            <div class="col-md-12" id="review_task">\n' +
    '              <h3 class="modal-title text-center" id="myModalLabel">Lets make sure everything is Correct?</h3>\n' +
    '              <div class="col-md-4 no-pad-left">\n' +
    '                <h4 id="task_title_preveiw">{{taskPostData.task_title}}\n' +
    '                  <small class="location_of_task">{{taskPostData.task_location[\'formatted_address\']}}</small>\n' +
    '                  <small>( this will not be shown to other users. )</small>\n' +
    '              </h4></div>\n' +
    '              <div class="col-md-4 text-center">\n' +
    '                <div class="btn btn-budget">Budget $\n' +
    '                  <span id="budget_amount">{{taskPostData.task_budget}}</span>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-md-4 no-pad-right">\n' +
    '                <div class="task_due_date count_down">\n' +
    '                  <strong>Task Starts on</strong>\n' +
    '                  <br>\n' +
    '                  <span id="choosen_date">{{taskPostData.start_date | date:\'EEE dd, MMM, yyyy @ hh:MM a\'}}</span>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="col-md-12 no-padding desc">\n' +
    '                <h3>Your Description</h3>\n' +
    '                <div class="task_desc count_down" placeholder="Task Description">{{taskPostData.task_description}}</div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <input type="hidden" name="img_name" ng-model="taskPostData.img_name" ng-init="taskPostData.img_name=imag_urls">\n' +
    '            <div class="col-md-12 no-padding task_photo">\n' +
    '              <ul id="task_imgs">\n' +
    '                <li ng-repeat="imag_url in imag_urls track by $index">\n' +
    '                  <img src="/api/file/{{imag_url}}">\n' +
    '                </li>\n' +
    '              </ul>\n' +
    '            </div>\n' +
    '            <div class="col-md-12 address_map">\n' +
    '              <div style="height:200px">\n' +
    '                <ng-map center="{{data.lat}},{{data.lng}}" zoom="10" zoom-control="true" class="map">\n' +
    '                  <marker draggable="false" position="{{data.lat}},{{data.lng}}"></marker>\n' +
    '                </ng-map>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '          </md-step-body>\n' +
    '          <md-step-actions>\n' +
    '            <div class="col-md-12 text-center post_task_btn margin">\n' +
    '              <a ng-click="previousStep()" class="btn md-red btn-xl edit_task">Back</a>\n' +
    '              <button name="submit" class="btn btn-success btn-xl btn-post-task" ng-click="btn_post_task(taskPostData, post_status)">Post My Task!</button>\n' +
    '            </div>\n' +
    '          </md-step-actions>\n' +
    '        </md-step>\n' +
    '      </md-stepper>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>');
	a.put('/frontend/account/view/register.html', '<div class="modal-header">\n' +
    '            <h3 class="modal-title" id="modal-title">Welcome</h3>\n' +
    '        </div>\n' +
    '        <div class="modal-body" id="modal-body">\n' +
    '             <a ng-click="facebookLogin()" class="btn btn-facebook btn-block">Continue using Facebook</a>\n' +
    '                <a ng-click="googleLogin()" class="btn btn-google btn-block">Continue using Google</a>\n' +
    '        </div>\n' +
    '        <div class="modal-footer">\n' +
    '            <p>By continuing you agree to our <a ui-sref="page.terms">terms</a> & <a ui-sref="page.policy">privacy policy.</a></p>\n' +
    '        </div>\n' +
    '    ');
	a.put('/frontend/account/view/logout.html', '<!-- Page Content -->\n' +
    '    <section id="overview-tasks" class="page-content bg-shade jumbotron">\n' +
    '        <div class="container">\n' +
    '            <div class="row">\n' +
    '                <div id="task-post">\n' +
    '                    <div class="col-md-12">\n' +
    '                        <div class="holder clearfix">\n' +
    '                            <h6>You have been Logged out successfully</h6>\n' +
    '                            <!-- <p>Please check your email and verify your email address. You will be redirected to the homepage in a few seconds...</p> -->\n' +
    '                            <p>You will be redirected to the homepage in a few seconds...</p>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </section>\n' +
    '    <section id="support" class="page-content">\n' +
    '        <div class="overlay-black"></div>\n' +
    '        <div class="container">\n' +
    '            <div class="row">\n' +
    '                <div class="col-md-12 text-center">\n' +
    '                    <h1 class="text-uppercase">Support</h1>\n' +
    '                    <p class="head-lead">Need any help? Contact us below.</p>\n' +
    '                    <p>&nbsp;</p>\n' +
    '                    <a href="<?php echo base_url(\'pages/contact\');?>" class="btn btn-white btn-lg">Drop us a line</a>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </section>');
	a.put('/frontend/account/view/login.html', '<div class="modal-header">\n' +
    '            <h3 class="modal-title" id="modal-title">Welcome Back</h3>\n' +
    '        </div>\n' +
    '        <div class="modal-body" id="modal-body">\n' +
    '                <a ng-click="facebookLogin()" class="btn btn-facebook btn-block">Continue using Facebook</a>\n' +
    '                <a ng-click="googleLogin()" class="btn btn-google btn-block">Continue using Google</a>\n' +
    '        </div>\n' +
    '        <div class="modal-footer">\n' +
    '            <p>By continuing you agree to our <a ui-sref="page.terms">terms</a> & <a ui-sref="page.policy">privacy policy.</a></p>\n' +
    '        </div>\n' +
    '    ');
	a.put('/frontend/account/view/login-redirect.html', '<!-- Page Content -->\n' +
    '    <section id="overview-tasks" class="page-content bg-shade jumbotron">\n' +
    '        <div class="container">\n' +
    '            <div class="row">\n' +
    '                <div id="task-post">\n' +
    '                    <div class="col-md-12">\n' +
    '                        <div class="holder clearfix">\n' +
    '                            <h2>You have been logged in to Taskoli\n' +
    '                            <!-- <p>Please check your email and verify your email address. You will be redirected to the homepage in a few seconds...</p> -->\n' +
    '                            <p>You will be redirected to your profile in a few seconds...</p>\n' +
    '                        </h2></div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </section>\n' +
    '    <section id="support" class="page-content">\n' +
    '        <div class="overlay-black"></div>\n' +
    '        <div class="container">\n' +
    '            <div class="row">\n' +
    '                <div class="col-md-12 text-center">\n' +
    '                    <h1 class="text-uppercase">Support</h1>\n' +
    '                    <p class="head-lead">Need any help? Contact us below.</p>\n' +
    '                    <p>&nbsp;</p>\n' +
    '                    <a ui-sref="pages.contact" class="btn btn-white btn-lg">Drop us a line</a>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </section>');
	a.put('/frontend/index.html', '<h1>Invalid template: \frontend\index.html</h1><pre>Parse Error: &lt;div ui-view="navbar" ng-cloak id- "top-nav"&gt;&lt;/div&gt;\n' +
    '        &lt;div ui-view="side-menu" ng-cloak&gt;&lt;/div&gt;\n' +
    '        &lt;main ui-view="content"&gt;\n' +
    '            &lt;!-- Angular views --&gt;\n' +
    '        &lt;/main&gt;\n' +
    '        &lt;div class="footer" ng-cloak&gt;\n' +
    '            &lt;div ui-view="footer" ng-cloak ng-hide="$state.includes(\'tasks\') || $state.includes(\'messages\')"&gt;\n' +
    '            &lt;/div&gt;\n' +
    '        &lt;/div&gt;\n' +
    '    &lt;/div&gt;\n' +
    '&lt;/body&gt;\n' +
    '&lt;!-- Google Maps API with KEY--&gt;\n' +
    '&lt;script async="true" ng-src="{{$root.trustAsResourceUrl()}}"&gt;&lt;/script&gt;\n' +
    '\n' +
    '&lt;!-- bower:js --&gt;\n' +
    '&lt;script src="../bower_components/angular/angular.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="../bower_components/angular-ui-router/release/angular-ui-router.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="../bower_components/angular-recaptcha/release/angular-recaptcha.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="../bower_components/ngmap/build/scripts/ng-map.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="../bower_components/angular-socialshare/dist/angular-socialshare.min.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="../bower_components/lodash/lodash.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="../bower_components/angular-bootstrap/ui-bootstrap-tpls.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="../bower_components/angularjs-slider/dist/rzslider.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="../bower_components/angular-toastr/dist/angular-toastr.tpls.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="../bower_components/ngInfiniteScroll/build/ng-infinite-scroll.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="../bower_components/angular-loading-bar/build/loading-bar.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="../bower_components/moment/moment.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="../bower_components/angular-moment/angular-moment.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="../bower_components/angular-google-places-autocomplete/src/autocomplete.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="../bower_components/angular-google-places-autocomplete/dist/autocomplete.min.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="../bower_components/ng-file-upload/ng-file-upload.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="../bower_components/angular-animate/angular-animate.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="../bower_components/angular-aria/angular-aria.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="../bower_components/angular-messages/angular-messages.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="../bower_components/angular-material/angular-material.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="../bower_components/ng-material-datetimepicker/js/angular-material-datetimepicker.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="../bower_components/ngGeolocation/ngGeolocation.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="../bower_components/socket.io-client/dist/socket.io.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="../bower_components/angular-socket-io/socket.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="../bower_components/angular-scroll/angular-scroll.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="../bower_components/angular-typer/dist/typer.min.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="../bower_components/material-steppers/dist/material-steppers.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="../bower_components/angular-browser-push-notifications/dist/angular-browser-push-notifications.js"&gt;&lt;/script&gt;\n' +
    '&lt;!-- endbower --&gt;\n' +
    '&lt;!-- endinject --&gt;\n' +
    '\n' +
    '&lt;!-- inject:js --&gt;\n' +
    '&lt;script src="/frontend/init.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="/frontend/config/bootstrap.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="/frontend/config/constants.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="/frontend/config/httpInterceptors.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="/frontend/directives/coundown.directive.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="/frontend/directives/fallback.directive.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="/frontend/directives/lightbox.directive.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="/frontend/template/templates.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="/frontend/util/countdown.util.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="/frontend/account/controller/account.controller.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="/frontend/account/controller/login.controller.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="/frontend/account/route/account.state.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="/frontend/account/service/account.service.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="/frontend/auth/service/auth.service.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="/frontend/editTask/service/editTask.service.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="/frontend/editTask/controller/editTask.controller.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="/frontend/hire/service/hire.service.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="/frontend/hire/controller/hire.controller.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="/frontend/home/controller/home.controller.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="/frontend/home/route/home.state.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="/frontend/main/controller/main.controller.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="/frontend/main/controller/menu.controller.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="/frontend/main/route/main.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="/frontend/main/service/main.service.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="/frontend/messages/controller/message.controller.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="/frontend/messages/controller/messages.controller.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="/frontend/messages/controller/single.message.controller.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="/frontend/messages/services/messages.service.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="/frontend/messages/route/messages.state.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="/frontend/mytask/service/mytask.service.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="/frontend/pages/route/pages.state.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="/frontend/posttask/controller/posttask.controller.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="/frontend/posttask/service/posttask.service.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="/frontend/profile/controller/profile.controller.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="/frontend/profile/route/profile.state.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="/frontend/profile/services/profile.service.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="/frontend/socket/factory/socket.service.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="/frontend/tasks/route/tasks.state.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="/frontend/tasks/controller/profile-modal.controller.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="/frontend/tasks/controller/tags.controller.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="/frontend/tasks/controller/task.controller.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="/frontend/tasks/controller/tasks.controller.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="/frontend/tasks/service/tasks.service.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="/frontend/mytask/employer/controller/employer.controller.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="/frontend/mytask/tasker/controller/tasker.controller.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="/frontend/mytask/task_completed/controller/reject.controller.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="/frontend/mytask/task_completed/controller/task_completed.controller.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="/frontend/mytask/task_completed/service/task_completed.service.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="/frontend/profile/edit-profile/services/edit-profile.service.js"&gt;&lt;/script&gt;\n' +
    '&lt;script src="/frontend/profile/edit-profile/controller/edit-profile.controller.js"&gt;&lt;/script&gt;\n' +
    '&lt;!-- endinject --&gt;\n' +
    '\n' +
    '\n' +
    '&lt;/html&gt;</pre>');
	 }]); })();