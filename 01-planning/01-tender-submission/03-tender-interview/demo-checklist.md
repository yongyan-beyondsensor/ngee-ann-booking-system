Now, look at this [SPEC.md](file;file:///e%3A/dev/ngee-ann-booking-system/01-planning/01-tender-submission/scripts/resend-email-utilities/SPEC.md), and I am trying to align the core sope which we needed to show in the demo. Here are some of the key things:

## Demo 0 : Introduction

Highlight the Overview:

1. Students and Lecturers goes to Website
2. Download as an App on their Phone
3. Able to Sign In
   - Student Sign in from Phone
   - Lecturer Sign in from Desktop
   - Staff Sign in from Desktop

## Demo 1 : Booking Operations Flow

Demonstrate how the Students will be able to make a Booking to show them what they will see on the System. We also need to establish the Approval Flow and Updates.

Phase 1: Student make a Booking

    - Student able to make a booking, and the booking is registered in the system.

Phase 2: Lecturer Review to Approve or Reject
Phase 3: Store Manager Prep the Item

## Demo 2 : Collection of Equipment

Demonstrate how the Student be able to collect their Items, based on the instructions provided by the Process.

Option 1: Explain How the Students can Collect Item in Office

- Student approach Office and present QR Code for Scanning
- Store Manager scans the QR Code and draw the Package from the Store.
- Student check the Items
- Student sign off the Items
- Booking marked as Collected

Option 2: Explain How the Students can Collect Item in Site

- Student Approach locker and enter the PIN or Scan QR Code
- Locker Opens (If Success)
- Student Collect the Item and close the Locker
- Booking marked as Collected

## Demo 2 : Booking Return

Student will proceed to Office to return the Equipment where they would present for Admin / Officer to scan and pull Booking Record. Inspector will then check on the items, and if complete and everything is in order, they would be able to download the Item.

- Scenario A: Issues are all clear. No issues with items. Admin will be able to scan and mark the Booking as Returned.

- Scenario B: There are some issuies, Admin can make remarks like items damaged, items missing in list, etc.

## Demo 3: Managing and Onboarding Users

1. Go to User List Page and show all of the Users
2. Upload a CSV and upload the list of Users; Select the Role (Usually Student), and register
3. Users will be created in the List, but will not be confirmed.
4. Users will receive an Email Invitation, where they would be able to click in to confirm, they will need to put their passwords from there.

## Demo 4: Inventory Page

1. Show how we can manage the Iventory Items, so that Bookings can be made.

### Exclusions:

- Do not need to come oute with the Inventory CSV Features, since it is not confirmed yet.

## Demo 5 : Audit Logs

- How do we review and show Audit Logs.
- A Single Page that shows all of the Users, only accessible by the Admin.
- Admnin can inspect

## Demo 6 : API Integration

- Provide a list of APIs, which would be used to handle the integration

- Get Approved Codes API
- Update Booking
- Verify Booking Validity
- Any Other APIs that will be needed

We do not need to implement the APIs, but present the documents in a Swagger Document, to demonstrate what are the APIs that is needed.

Q&A

Anticipate the Question people will ask here.
