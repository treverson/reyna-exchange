<template>
    <page theme="account">
        <account-header />

        <!-- container -->
        <container>

            <div class="AccountSettings">

                <!-- header -->
                <h1 class="AccountSettings__heading">Settings</h1>
                <!-- header end -->

                <!-- tabs -->
                <div class="AccountSettings__tabs">
                    <a :class="{ 'AccountSettings__tab': true, 'AccountSettings_isCurrent_yes': currentItem === 0 }" @click="changeCurrentItem(0)">
                        My profile
                    </a>
                    <a :class="{ 'AccountSettings__tab': true, 'AccountSettings_isCurrent_yes': currentItem === 1 }" @click="changeCurrentItem(1)">
                        Preferences
                    </a>
                    <a :class="{ 'AccountSettings__tab': true, 'AccountSettings_isCurrent_yes': currentItem === 2 }" @click="changeCurrentItem(2)">
                        Security
                    </a>
                </div>
                <!-- tabs end -->

                <!-- content -->
                <div v-if="currentItem === 0" class="AccountSettings__content">

                    <!-- section -->
                    <div class="AccountSettings__section">

                        <!-- group column -->
                        <div class="AccountSettings__groupColumn">

                            <!-- section column -->
                            <div class="AccountSettings__sectionColumn">

                                <!-- item -->
                                <div class="AccountSettings__item">

                                    <!-- heading -->
                                    <div class="AccountSettings__headingContent">

                                        <div class="AccountSettings__sectionHeading">
                                            Display Name
                                        </div>
                                        <div class="AccountSettings__sectionDesc">
                                            This is your public name, others can see it
                                        </div>

                                    </div>
                                    <!-- heading end -->

                                    <form-input type="text" responsive-key="username" />

                                </div>
                                <!-- item end -->

                                <!-- item -->
                                <div class="AccountSettings__item">

                                    <!-- heading -->
                                    <div class="AccountSettings__headingContent">

                                        <div class="AccountSettings__sectionHeading">
                                            Email
                                        </div>

                                    </div>
                                    <!-- heading end -->

                                    <form-input type="email" responsive-key="email" />

                                </div>
                                <!-- item end -->

                                <!-- item -->
                                <div class="AccountSettings__item AccountSettings__item_alignRight">
                                    <user-button type="button" theme="green" class="AccountSettings__submitButton">
                                        Save
                                    </user-button>
                                </div>
                                <!-- item end -->

                            </div>
                            <!-- section column end -->

                            <!-- section profile -->
                            <div class="AccountSettings__sectionProfile">

                                <!-- profile avatar -->
                                <div class="AccountSettings__profileAvatar">

                                    <div class="AccountSettings__userAvatar"></div>

                                    <div class="AccountSettings__pictureSection">
                                     <span class="AccountSettings__pictureTitle">
                                         Profile picture
                                     </span>
                                        <span class="AccountSettings__pictureDesk">
                                         Max file size is 5 mb
                                     </span>
                                    </div>

                                    <user-button type="button" theme="gray" class="AccountSettings__pictureUpload">
                                        Upload
                                    </user-button>

                                </div>
                                <!-- profile avatar end -->

                                <div class="AccountSettings__profilePassword">

                                    <span class="AccountSettings__profilePasswordTitle">
                                        Password
                                    </span>

                                    <user-button type="button" theme="gray" class="AccountSettings__profilePasswordChange">
                                        Change password
                                    </user-button>

                                </div>

                            </div>
                            <!-- end section profile -->

                        </div>
                        <!-- group column end -->

                    </div>
                    <!-- section end -->

                    <!-- section -->
                    <div class="AccountSettings__section">

                        <!-- item -->
                        <div class="AccountSettings__item AccountSettings__item_styleFluid">

                            <!-- heading -->
                            <div class="AccountSettings__headingContent">

                                <div class="AccountSettings__sectionHeading">
                                    Personal Information <span class="icon-locked"></span>
                                </div>
                                <div class="AccountSettings__sectionDesc">
                                    This is what others do not see
                                </div>

                            </div>
                            <!-- heading end -->

                            <!-- content -->
                            <div class="AccountSettings__centerContent">

                                <div class="AccountSettings__contentGrid">
                                    <div class="AccountSettings__gridItem">
                                        <form-input type="text" responsive-key="firstName" value="Georg" :disabled="true" />
                                    </div>
                                    <div class="AccountSettings__gridItem">
                                        <form-input type="text" responsive-key="lastName" value="Petrosky" :disabled="true" />
                                    </div>
                                </div>

                            </div>
                            <!-- content end -->

                            <div class="AccountSettings__additionalInformation">
                                You can not change your legal name
                            </div>

                        </div>
                        <!-- item end -->

                        <!-- item -->
                        <div class="AccountSettings__item AccountSettings__item_withoutSidebar AccountSettings__item_styleFluid">

                            <!-- content -->
                            <div class="AccountSettings__centerContent">

                                <div class="AccountSettings__contentGrid AccountSettings__contentGrid_fixedFlex">

                                    <div class="AccountSettings__gridItem AccountSettings__itemBirthMonth">
                                        <data-list :data="dataBirthMonth" data-type="list" />
                                    </div>
                                    <div class="AccountSettings__gridItem AccountSettings__itemBirthDay">
                                        <data-list :data="dataBirthDay" data-type="list" />
                                    </div>
                                    <div class="AccountSettings__gridItem AccountSettings__itemBirthYear">
                                        <data-list :data="dataBirthYear" data-type="list" />
                                    </div>

                                </div>

                            </div>
                            <!-- content end -->

                        </div>
                        <!-- item end -->

                        <!-- item -->
                        <div class="AccountSettings__item AccountSettings__item_withoutSidebar AccountSettings__item_styleFluid">

                            <!-- content -->
                            <div class="AccountSettings__centerContent">

                                <div class="AccountSettings__contentGrid">

                                    <form-input type="text" responsive-key="Address-line-1" placeholder="Address line 1" />

                                </div>

                            </div>
                            <!-- content end -->

                        </div>
                        <!-- item end -->

                        <!-- item -->
                        <div class="AccountSettings__item AccountSettings__item_withoutSidebar AccountSettings__item_styleFluid">

                            <!-- content -->
                            <div class="AccountSettings__centerContent">

                                <div class="AccountSettings__contentGrid">

                                    <form-input type="text" responsive-key="Address-line-2" placeholder="Address line 2" />

                                </div>

                            </div>
                            <!-- content end -->

                        </div>
                        <!-- item end -->

                        <!-- item -->
                        <div class="AccountSettings__item AccountSettings__item_withoutSidebar AccountSettings__item_styleFluid">

                            <!-- content -->
                            <div class="AccountSettings__centerContent">

                                <div class="AccountSettings__contentGrid">

                                    <form-input type="text" responsive-key="City" placeholder="City" />

                                </div>

                            </div>
                            <!-- content end -->

                        </div>
                        <!-- item end -->

                        <!-- item -->
                        <div class="AccountSettings__item AccountSettings__item_withoutSidebar AccountSettings__item_styleFluid">

                            <!-- content -->
                            <div class="AccountSettings__centerContent">

                                <div class="AccountSettings__contentGrid">

                                    <form-input type="text" responsive-key="Postal-Code" placeholder="Postal Code" />

                                </div>

                            </div>
                            <!-- content end -->

                        </div>
                        <!-- item end -->

                        <!-- item -->
                        <div class="AccountSettings__item AccountSettings__item_withoutSidebar AccountSettings__item_styleFluid">

                            <!-- content -->
                            <div class="AccountSettings__centerContent">

                                <div class="AccountSettings__contentGrid">

                                    <form-input type="text" responsive-key="Unated States" value="Unated States" :disabled="true" />

                                </div>

                            </div>
                            <!-- content end -->

                        </div>
                        <!-- item end -->

                        <!-- item -->
                        <div class="AccountSettings__item AccountSettings__item_alignRight">
                            <user-button type="button" theme="green" class="AccountSettings__submitButton">
                                Save
                            </user-button>
                        </div>
                        <!-- item end -->

                    </div>
                    <!-- section end -->

                </div>
                <!-- content end -->

                <!-- content -->
                <div v-if="currentItem === 1" class="AccountSettings__content">

                    <!-- section -->
                    <div class="AccountSettings__section">

                        <!-- item -->
                        <div class="AccountSettings__item">

                            <!-- heading -->
                            <div class="AccountSettings__headingContent">

                                <div class="AccountSettings__sectionHeading">
                                    Time zone
                                </div>

                            </div>
                            <!-- heading end -->

                            <div class="AccountSettings__centerContent AccountSettings__timeZoneContent">
                                <data-list :data="dataTimeZone" data-type="list" />
                            </div>

                        </div>
                        <!-- item end -->

                        <!-- item -->
                        <div class="AccountSettings__item AccountSettings__item_alignRight AccountSettings__item_timeZoneContent">
                            <user-button type="button" theme="green" class="AccountSettings__submitButton">
                                Save
                            </user-button>
                        </div>
                        <!-- item end -->

                    </div>
                    <!-- section end -->

                    <!-- section -->
                    <div class="AccountSettings__section">

                        <!-- item -->
                        <div class="AccountSettings__item">

                            <!-- heading -->
                            <div class="AccountSettings__headingContent">

                                <div class="AccountSettings__sectionHeading">
                                    Notifications
                                </div>
                                <div class="AccountSettings__sectionDesc">
                                    Email me when
                                </div>

                            </div>
                            <!-- heading end -->

                            <div class="AccountSettings__centerContent AccountSettings__smallSizeContent">

                                <form-checkbox responsive-key="Notifications-1" label="I send or receive digital currency" class="AccountSettings__notificationsCheckboxItem" />
                                <form-checkbox responsive-key="Notifications-2" label="I receive merchant orders" class="AccountSettings__notificationsCheckboxItem" />
                                <form-checkbox responsive-key="Notifications-3" label="There are recommended actions for my account" class="AccountSettings__notificationsCheckboxItem" />

                            </div>

                        </div>
                        <!-- item end -->

                        <!-- item -->
                        <div class="AccountSettings__item AccountSettings__item_alignRight AccountSettings__item_smallSizeContent AccountSettings__item_timeZoneContent">
                            <user-button type="button" theme="green" class="AccountSettings__submitButton">
                                Save
                            </user-button>
                        </div>
                        <!-- item end -->

                    </div>
                    <!-- section end -->

                </div>
                <!-- content end -->

                <!-- content -->
                <div v-if="currentItem === 2" class="AccountSettings__content">

                    <!-- section -->
                    <div class="AccountSettings__section">

                        <!-- item -->
                        <div class="AccountSettings__item AccountSettings__item_contentCenter">

                            <!-- heading -->
                            <div class="AccountSettings__headingContent">

                                <div class="AccountSettings__sectionHeading">
                                    Phone number
                                    <span class="AccountSettings__phone AccountSettings__phone_verified">
                                        Verified
                                    </span>
                                </div>

                            </div>
                            <!-- heading end -->

                            <div class="AccountSettings__centerContent AccountSettings__timeZoneContent">

                                <div class="AccountSettings__phoneChange">

                                    <span class="AccountSettings__phoneNumber">
                                        +xx xxx xxx x00
                                    </span>

                                    <user-button type="button" theme="gray" class="AccountSettings__phoneChangeButton">
                                        Change
                                    </user-button>

                                </div>

                            </div>

                        </div>
                        <!-- item end -->

                    </div>
                    <!-- section end -->

                    <!-- section -->
                    <div class="AccountSettings__section">

                        <!-- item -->
                        <div class="AccountSettings__item">

                            <!-- heading -->
                            <div class="AccountSettings__headingContent">

                                <div class="AccountSettings__sectionHeading">
                                    Verification code
                                </div>
                                <div class="AccountSettings__sectionDesc">
                                    Require to send
                                </div>

                            </div>
                            <!-- heading end -->

                            <div class="AccountSettings__centerContent AccountSettings__timeZoneContent">

                                <form-group-radio>
                                    <form-radio responsive-key="radio-any-amount" title="Any amount of digital currency" />
                                    <form-radio responsive-key="radio-more-than" title="More than 1.0000 BTC per day" />
                                    <form-radio responsive-key="radio-never" title="Never (Not secure)" />
                                </form-group-radio>

                            </div>

                        </div>
                        <!-- item end -->

                        <!-- item -->
                        <div class="AccountSettings__item AccountSettings__item_alignRight AccountSettings__item_smallSizeContent">
                            <user-button type="button" theme="green" class="AccountSettings__submitButton">
                                Save
                            </user-button>
                        </div>
                        <!-- item end -->

                    </div>
                    <!-- section end -->

                </div>
                <!-- content end -->

            </div>

        </container>
        <!-- container end -->

        <account-footer />
    </page>
</template>

<script>
    import Page from "@/components/Core/Page/Page";
    import AccountHeader from "@/components/Account/Header/Header";
    import AccountFooter from "@/components/Account/Footer/Footer";
    import Container from "@/components/Account/AccountContainer/AccountContainer";
    import FormInput from "@/components/Core/Form/FormInput/FormInput";
    import UserButton from "@/components/Core/UserButton/UserButton";
    import DataList from "@/components/Account/UI/DataList/DataList";
    import FormCheckbox from "@/components/Core/Form/FormCheckbox/FormCheckbox";
    import FormRadio from "@/components/Core/Form/FormRadio/FormRadio";
    import FormGroupRadio from "@/components/Core/Form/FormGroupRadio/FormGroupRadio";
    export default {
        name: "AccountSettings",
        components: {
            FormGroupRadio,
            FormRadio,
            FormCheckbox, DataList, UserButton, FormInput, Container, AccountHeader, AccountFooter, Page},
        data () {
            return {
                currentItem: 1,
                dataTimeZone: [
                    {
                        id: 0,
                        content: "(GMT -8:00) Pacific Time (US & Canada)"
                    },
                    {
                        id: 1,
                        content: "Withdraw"
                    },
                    {
                        id: 2,
                        content: "Deposit"
                    }
                ],
                dataBirthMonth: [
                    {
                        id: 0,
                        content: "Birth Month"
                    },
                    {
                        id: 1,
                        content: "Withdraw"
                    },
                    {
                        id: 2,
                        content: "Deposit"
                    }
                ],
                dataBirthDay: [
                    {
                        id: 0,
                        content: "Day"
                    },
                    {
                        id: 1,
                        content: "Withdraw"
                    },
                    {
                        id: 2,
                        content: "Deposit"
                    }
                ],
                dataBirthYear: [
                    {
                        id: 0,
                        content: "Year"
                    },
                    {
                        id: 1,
                        content: "Withdraw"
                    },
                    {
                        id: 2,
                        content: "Deposit"
                    }
                ]
            }
        },
        methods: {
            changeCurrentItem: function (id) {
                this.currentItem = id
            }
        }
    }
</script>

<style lang="scss">
    @import "AccountSettings";
</style>
