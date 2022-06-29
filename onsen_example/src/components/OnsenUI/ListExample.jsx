import React from "react";
import { List, ListItem, ListHeader ,Button } from "react-onsenui";

export default function ListExample() {
  return (
    <>
      <List>
        <ListHeader>THumbNail</ListHeader>
        <ListItem>
          <div class="left">
            <img class="list-item thumbnail" src="https://placekitten.com/g/40/40"  alt=""
            />
          </div>
          <div class="center">
            <span class="list-item__title">Cutest kitty</span>
            <span class="list-item__subTitle">On the interest</span>
          </div>
        </ListItem>
      </List>

      <List
        dataSource={["Row 1", "Row 2", "youngcha"]}
        renderHeader={()=> <ListHeader>Thumnails</ListHeader>}
        renderRow={(row, idx) => (
          <ListItem>
            {row}
            <Button modifier="quiet">Remove</Button>
          </ListItem>
        )}
        renderFooter={() => <div>Thumnails</div>}
      />
    </>
  );
}
