$('body').append(`
<div id="pw-control-panel" style="pointer-events:auto;padding:10px;width:360px;height:215px;position:absolute;right:10px;bottom:3.75rem;background-color:#f8f8f8;z-index:9997;">
    <style>.pw-button { background-color: white; color: black; border: 2px solid #555555; transition-duration: 0.4s; } .pw-button:hover { background-color: #555555; color: white; }</style>
     <div style="width:100%;">
        <div style="float:left;width:10%;text-align:left;">
            <button class="mover" style="font-size:20px;line-height:30px;cursor:move;" title="Move Blackboard Collaborate Control Panel">&boxbox;</button>
        </div>
        <div style="float:left;width:80%;text-align:center;">
            <span style="font-size:15px;line-height:30px;">Blackboard Collaborate Control Panel</span>
        </div>
        <div style="float:right;width:10%;text-align:right;">
            <button style="font-size:30px;cursor:pointer;" title="Close Blackboard Collaborate Control Panel" onclick="$(\'#pw-wrapper\').remove();$(\'#pw-control-panel\').remove();">&times;</button>
        </div>
    </div>
    <table style="margin-bottom:3px;">
        <tr style="background-color:#fff;">
            <td>
                <p style="margin-bottom:5px;">Set Emotion Feedback</p>
                <button onclick="$(\'#happy\').click();">
                    <bb-svg-icon class="participant-emotion-icon ng-scope ng-isolate-scope" name="status-happy.c" size="small" color="true">
                        <svg class="svg-icon small color" ng-class="{\'default\': !svgIcon.color, \'color\': svgIcon.color}" focusable="false" aria-hidden="true">
                            <use xlink:href="#small--status-happy.c">
                                <symbol
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="small--status-happy.c">
                                    <circle fill="#FFE300" stroke="#FFC526" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="8" cy="8" r="7.5"></circle>
                                    <circle fill="none" stroke="#333" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="5.5" cy="5.5" r=".5"></circle>
                                    <circle fill="none" stroke="#333" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="10.5" cy="5.5" r=".5"></circle>
                                    <path fill="none" stroke="#333" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M3.988 10c.739 1.477 2.249 2.5 4.012 2.5 1.763 0 3.273-1.023 4.012-2.5"></path>
                                </symbol>
                            </use>
                        </svg>
                    </bb-svg-icon>
                </button>
                <span></span>
                <button onclick="$(\'#sad\').click();">
                    <bb-svg-icon class="participant-emotion-icon ng-scope ng-isolate-scope" name="status-sad.c" size="small" color="true">
                        <svg class="svg-icon small color" ng-class="{\'default\': !svgIcon.color, \'color\': svgIcon.color}" focusable="false" aria-hidden="true">
                            <use xlink:href="#small--status-sad.c">
                                <symbol
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="small--status-sad.c">
                                    <circle fill="#26D7FD" stroke="#02C6F2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="8" cy="8" r="7.5"></circle>
                                    <circle fill="none" stroke="#262626" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="5.5" cy="5.5" r=".5"></circle>
                                    <circle fill="none" stroke="#262626" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="10.5" cy="5.5" r=".5"></circle>
                                    <path fill="none" stroke="#262626" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M4 11c.736-1.477 2.242-2.5 4-2.5s3.264 1.023 4 2.5"></path>
                                </symbol>
                            </use>
                        </svg>
                    </bb-svg-icon>
                </button>
                <span></span>
                <button onclick="$(\'#surprised\').click();">
                    <bb-svg-icon class="participant-emotion-icon ng-scope ng-isolate-scope" name="status-surprised.c" size="small" color="true">
                        <svg class="svg-icon small color" ng-class="{\'default\': !svgIcon.color, \'color\': svgIcon.color}" focusable="false" aria-hidden="true">
                            <use xlink:href="#small--status-surprised.c">
                                <symbol
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="small--status-surprised.c">
                                    <circle fill="#FFF5C3" stroke="#FFC526" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="8" cy="8" r="7.5"></circle>
                                    <circle fill="none" stroke="#946D00" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="5.5" cy="5.5" r="1"></circle>
                                    <ellipse fill="#FFC526" stroke="#946D00" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="8" cy="10.5" rx="2" ry="2.5"></ellipse>
                                    <circle fill="none" stroke="#946D00" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="10.5" cy="5.5" r="1"></circle>
                                </symbol>
                            </use>
                        </svg>
                    </bb-svg-icon>
                </button>
                <span></span>
                <button onclick="$(\'#confused\').click();">
                    <bb-svg-icon class="participant-emotion-icon ng-scope ng-isolate-scope" name="status-confused.c" size="small" color="true">
                        <svg class="svg-icon small color" ng-class="{\'default\': !svgIcon.color, \'color\': svgIcon.color}" focusable="false" aria-hidden="true">
                            <use xlink:href="#small--status-confused.c">
                                <symbol
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="small--status-confused.c">
                                    <circle fill="#C8FAFF" stroke="#02C6F2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="8" cy="8" r="7.5"></circle>
                                    <path fill="#C8FAFF" stroke="#006C77" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M3.5 10.5c0-1.105 1.119-2 2.5-2l4 2c1.381 0 2.5-.895 2.5-2"></path>
                                    <circle fill="#C8FAFF" stroke="#006C77" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="5.5" cy="5.5" r=".5"></circle>
                                    <circle fill="#C8FAFF" stroke="#006C77" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="10.5" cy="5.5" r=".5"></circle>
                                </symbol>
                            </use>
                        </svg>
                    </bb-svg-icon>
                </button>
                <span></span>
                <button onclick="$(\'#faster\').click();">
                    <bb-svg-icon class="participant-emotion-icon ng-scope ng-isolate-scope" name="status-faster.c" size="small" color="true">
                        <svg class="svg-icon small color" ng-class="{\'default\': !svgIcon.color, \'color\': svgIcon.color}" focusable="false" aria-hidden="true">
                            <use xlink:href="#small--status-faster.c">
                                <symbol
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="small--status-faster.c">
                                    <path fill="#F8F8F8" stroke="#CDCDCD" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M2.913 14.5h10.174A7.474 7.474 0 0015.5 9a7.5 7.5 0 00-15 0c0 2.176.933 4.13 2.413 5.5z"></path>
                                    <circle fill="none" stroke="#979797" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="8" cy="4" r=".5"></circle>
                                    <path fill="#FF3B30" stroke="#CC413A" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M6.804 9.095c.5-.661 5.035-4.171 5.035-4.171s-2.143 5.32-2.642 5.981a1.5 1.5 0 11-2.393-1.81z"></path>
                                    <circle fill="none" stroke="#979797" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="3" cy="9" r=".5"></circle>
                                    <circle fill="none" stroke="#979797" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="4.5" cy="5.5" r=".5"></circle>
                                    <circle fill="none" stroke="#979797" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="13" cy="9" r=".5"></circle>
                                </symbol>
                            </use>
                        </svg>
                    </bb-svg-icon>
                </button>
                <span></span>
                <button onclick="$(\'#slower\').click();">
                    <bb-svg-icon class="participant-emotion-icon ng-scope ng-isolate-scope" name="status-slower.c" size="small" color="true">
                        <svg class="svg-icon small color" ng-class="{\'default\': !svgIcon.color, \'color\': svgIcon.color}" focusable="false" aria-hidden="true">
                            <use xlink:href="#small--status-slower.c">
                                <symbol
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="small--status-slower.c">
                                    <path fill="#F8F8F8" stroke="#CDCDCD" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M2.1 13.619A7.44 7.44 0 01.5 9a7.5 7.5 0 0115 0c0 2.176-.933 4.13-2.413 5.5H6.5"></path>
                                    <circle fill="none" stroke="#979797" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="8" cy="4" r=".5"></circle>
                                    <path fill="#26D7FD" stroke="#02C6F2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M9.061 11.061C8.475 11.646 3.5 14.5 3.5 14.5s2.854-4.975 3.439-5.561a1.501 1.501 0 012.122 2.122z"></path>
                                    <circle fill="none" stroke="#979797" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="3" cy="9" r=".5"></circle>
                                    <circle fill="none" stroke="#979797" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="4.5" cy="5.5" r=".5"></circle>
                                    <circle fill="none" stroke="#979797" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="11.5" cy="5.5" r=".5"></circle>
                                    <circle fill="none" stroke="#979797" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="13" cy="9" r=".5"></circle>
                                </symbol>
                            </use>
                        </svg>
                    </bb-svg-icon>
                </button>
            </td>
            <td>
                <p style="margin-bottom:5px;">Set AFK state</p>
                <button onclick="$(\'#away\').click();">
                    <bb-svg-icon class="participant-away-icon ng-scope ng-isolate-scope" name="status-away.c" size="small" color="true">
                        <svg class="svg-icon small color" ng-class="{\'default\': !svgIcon.color, \'color\': svgIcon.color}" focusable="false" aria-hidden="true">
                            <use xlink:href="#small--status-away.c">
                                <symbol
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" id="small--status-away.c">
                                    <circle cx="7.5" cy="7.5" r="7.5" fill="#ffe100"></circle>
                                    <path clip-rule="evenodd" fill="none" stroke="#333" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M7.5 2v5.5l3 2"></path>
                                </symbol>
                            </use>
                        </svg>
                    </bb-svg-icon>
                </button>
            </td>
        </tr>
        <tr style="background-color:#fff;">
            <td>
                <p style="margin-bottom:5px;">Set Yes/No Feedback</p>
                <button onclick="$(\'#approval\').click();">
                    <bb-svg-icon class="participant-emotion-icon ng-scope ng-isolate-scope" name="status-approval.c" size="small" color="true">
                        <svg class="svg-icon small color" ng-class="{\'default\': !svgIcon.color, \'color\': svgIcon.color}" focusable="false" aria-hidden="true">
                            <use xlink:href="#small--status-approval.c">
                                <symbol
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="small--status-approval.c">
                                    <path fill="#007D2C" stroke="#007D2C" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M8 2.565L10.01.5l.708 2.793 2.772-.783-.783 2.772 2.793.708L13.435 8l2.065 2.01-2.793.708.783 2.772-2.772-.783-.708 2.793L8 13.435 5.99 15.5l-.708-2.793-2.772.783.783-2.772L.5 10.01 2.565 8 .5 5.99l2.793-.708L2.51 2.51l2.772.783L5.99.5z"></path>
                                    <path fill="none" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M5.5 8l1.875 2L10.5 6"></path>
                                </symbol>
                            </use>
                        </svg>
                    </bb-svg-icon>
                </button>
                <span></span>
                <button onclick="$(\'#disapproval\').click();">
                    <bb-svg-icon class="participant-emotion-icon ng-scope ng-isolate-scope" name="status-disapproval.c" size="small" color="true">
                        <svg class="svg-icon small color" ng-class="{\'default\': !svgIcon.color, \'color\': svgIcon.color}" focusable="false" aria-hidden="true">
                            <use xlink:href="#small--status-disapproval.c">
                                <symbol
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="small--status-disapproval.c">
                                    <path fill="#FF4A36" stroke="#FF4A36" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M8 2.565L10.01.5l.708 2.793 2.772-.783-.783 2.772 2.793.708L13.435 8l2.065 2.01-2.793.708.783 2.772-2.772-.783-.708 2.793L8 13.435 5.99 15.5l-.708-2.793-2.772.783.783-2.772L.5 10.01 2.565 8 .5 5.99l2.793-.708L2.51 2.51l2.772.783L5.99.5z"></path>
                                    <path fill="none" stroke="#262626" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M5.938 10l4-4M9.938 10l-4-4"></path>
                                </symbol>
                            </use>
                        </svg>
                    </bb-svg-icon>
                </button>
            </td>
            <td>
                <p style="margin-bottom:5px;">Auto smile</p>
                <button class="pw-button" title="Smile every 1 minute" onclick="autoSmile(1);">1m</button>
                <span></span>
                <button class="pw-button" title="Smile every 2 minutes" onclick="autoSmile(2);">2m</button>
                <span></span>
                <button class="pw-button" title="Smile every 3 minutes" onclick="autoSmile(3);">3m</button>
                <span></span>
                <button class="pw-button" title="Smile every 5 minutes" onclick="autoSmile(5);">5m</button>
                <span></span>
                <button class="pw-button" title="Stop automatic smiling" onclick="stopAutoSmile();">Stop</button>
            </td>
        </tr>
    </table>
    <span style="font-size:10px;">Programmed by 
        <a target="_blank" href="https://www.piuswalter.de/">Pius Walter</a> (
        <a target="_blank" href="https://github.com/piuswalter/Blackboard-Collaborate-Control-Panel/">GitHub repo</a>)
    </span>
</div>
<div id="pw-wrapper" style="margin:0;padding:0;width:100vw;height:100vh;position:absolute;overflow:hidden;display:block;z-index:9998;left:0;top:0;pointer-events:none;"></div>
`);

var timeoutID = null;

function autoSmile(repetition) {
    if (timeoutID !== null) {
        stopAutoSmile(timeoutID);
    }
    $("#happy").click();
    timeoutID = setInterval(function() {
        $("#happy").click();
    }, repetition * 60 * 1000);
}

function stopAutoSmile() {
    clearTimeout(timeoutID);
    timeoutID = null;
}

var wrapper = document.querySelector('#pw-wrapper'),
    controlPanel = document.querySelector('#pw-control-panel'),
    mover = document.querySelector('.mover'),
    x = 0,
    y = 0,
    mousedown = false;
    
mover.addEventListener('mousedown', function(e) {
    mousedown = true;
    x = controlPanel.offsetLeft - e.clientX;
    y = controlPanel.offsetTop - e.clientY;
    $('.move-index').css('z-index', '9996');
    $('#pw-wrapper').css('pointer-events', 'auto');
}, true);

wrapper.addEventListener('mouseup', function(e) {
    mousedown = false;
    $('.move-index').css('z-index', '9999');
    $('#pw-wrapper').css('pointer-events', 'none');
}, true);

wrapper.addEventListener('mousemove', function(e) {
    if (mousedown) {
        controlPanel.style.left = e.clientX + x + 'px';
        controlPanel.style.top = e.clientY + y + 'px';
    }
}, true);
