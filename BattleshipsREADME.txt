Setup

Google Sheets - Two identical sheets, one named "Battleships" and one named "Master". The Master one will be for the team lead to set the ship grid.
Each sheet should have a grid 20 x 20 (Bottom corner of grid will be T20). Apply all borders to the selected area to create a defined grid. 
Cells V2 to Y4 should be selected and merged to create an outcome box. This can be formatted however you'd like. 
Underneath this box, create a button (Insert -> Drawing). This button will start the script.

Store the provided script in the script editor. Link the script to the button by selecting the button, clicking the menu dots that appear on the top right of the button and
selecting "Assign Script". A popup will appear, type "main" and hit OK.

Play

Team supervisor sets up the Master sheet by placing an "x" in each box where they'd like ships to go. This sheet then gets hidden (Right click tab -> Hide Sheet)
Players hit the button, enter the cell combination they'd like to target and hit "OK". The script will check whether this cell on the master sheet has been marked. If
it has, the box on the play sheet is coloured green and a "HIT!" message appears. The relevant box is also coloured green on the Master sheet to assist with tracking progress.
If not, the box on the play sheet is marked red and a "MISS!" message appears. 

Sheets can be reset by simply selecting the each grid and hitting "DELETE" followed by setting background fill to white/transparent.

