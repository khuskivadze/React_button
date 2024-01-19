import styles  from './Button.module.scss'
import { TbUserCheck } from "react-icons/tb";

type  Props = {
    title  : string;
    className? : string;
    desibled?: boolean;
    mode? :  'fill' | 'outline' | 'warring' | 'success' | 'error' | 'information'
    | 'lighWarring' | 'lightSuccess' | 'lightError' | 'lifghtInformation';
    icon? : 'on' | 'off';
}

export  default (props : Props) => {

    const  classes =  [styles.btContainer, props.className, styles.button] ;
    const iconClass = [props.className];  
    // join - ერეკიში ჩაშენებული მეთოფი რომელიც ერეის 
    //ყველა ელემენტს აიღებს, ერთ სტრინგში ჩაყრის  და მათ 
    //შორის მოათავებს გამოტოვებას;  
    //.trim() - მარჯვნიდან და მარცხნიდან მოაცილებს გამოტოვებს  სტრინგებს;
    // if (props.desibled) classes.push(styles.desibled)

    if(props.mode == 'outline') {
        classes.push(styles.outline)
    }else if(props.mode == 'success'){
        classes.push(styles.success)
    }else if(props.mode == 'warring'){
        classes.push(styles.warring)
    }else if(props.mode == 'error'){
        classes.push(styles.error)
    }else if(props.mode == 'information'){
        classes.push(styles.information)
    }
    else if(props.mode == 'lightSuccess'){
        classes.push(styles.lightSuccess)
    }else if(props.mode == 'lighWarring'){
        classes.push(styles.lighWarring)
    }else if(props.mode == 'lightError'){
        classes.push(styles.lightError)
    }else if(props.mode == 'lifghtInformation'){
        classes.push(styles.lifghtInformation)
    }else {
        classes.push(styles.fill)
    }



    if(props.icon == 'off') {
        iconClass.push(styles.icon_off )
    }else{
      
         iconClass.push(styles.icon_on)
    }

    
    return (
        <button disabled={props.desibled } 
         className={classes.join(' ').trim()}>
            <TbUserCheck  className= {iconClass.join(' ').trim()}/>
            {props.title}
            
        </button>
        
    )
 }