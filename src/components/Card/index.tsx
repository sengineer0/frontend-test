import * as React from "react"
import MuiCard, { CardTypeMap } from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia, { CardMediaTypeMap } from "@mui/material/CardMedia"
import { Checkbox, CheckboxProps, FormControlLabel, FormGroup, SxProps, Theme, CardContentTypeMap } from "@mui/material"
import { OverridableComponent } from "@mui/material/OverridableComponent"

export type CardProps = {
  label: string
  imageURL: string
  containerSx?: SxProps<Theme>
  cardProps?: OverridableComponent<CardTypeMap<{}, "div">>
  imageProps?: OverridableComponent<CardMediaTypeMap<{}, "div">>
  checked: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  checkboxProps?: CheckboxProps
  contentProps?: OverridableComponent<CardContentTypeMap<{}, "div">>
}

const Card: React.FC<CardProps> = ({ label, imageURL, checked, onChange, containerSx, cardProps, imageProps, checkboxProps, contentProps }) => {
  return (
    <MuiCard
      sx={{
        background: "#FFFFFF",
        width: 229,
        maxWidth: 229,
        border: `1px solid ${checked ? "#3D8479" : "#EFEFEF"}`,
        borderRadius: "10px",
        boxShadow: checked ? "0px 0px 0px 2px #65E9D9" : "none",
        ...containerSx,
        "&:hover": {
          boxShadow: "0px 0px 0px 2px #65E9D9"
        }
      }}
      {...cardProps}
    >
      <CardMedia component="img" height="100" image={imageURL} alt="image" {...imageProps} />
      <CardContent style={{ padding: "15px 13px" }} {...contentProps}>
        <FormGroup>
          <FormControlLabel
            sx={{
              margin: 0,
              height: 20,
              "& > .MuiTypography-root": {
                fontSize: 14
              }
            }}
            control={
              <Checkbox
                checked={checked}
                onChange={onChange}
                inputProps={{ "aria-label": "controlled" }}
                sx={{
                  color: "#616161",
                  marginRight: "5px",
                  padding: 0,
                  "&.Mui-checked": {
                    color: "#21B6A8"
                  },
                  "& > .MuiSvgIcon-root": {
                    height: 18
                  },
                  "& > .MuiTypography-root": {
                    fontSize: 14
                  }
                }}
                {...checkboxProps}
              />
            }
            label={label}
          />
        </FormGroup>
      </CardContent>
    </MuiCard>
  )
}

export default Card
