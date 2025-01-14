import {EsdtToken} from './EsdtToken'
import {IsAlphanumeric, IsNotEmpty, IsOptional, IsUppercase, Length, Max, Min} from 'class-validator'

export class EsdtProperties {
    @IsOptional()
    public canFreeze?: boolean;

    @IsOptional()
    public canWipe?: boolean;
    
    @IsOptional()
    public canPause?: boolean;
    
    @IsOptional()
    public canMint?: boolean;
    
    @IsOptional()
    public canBurn?: boolean;
    
    @IsOptional()
    public canChangeOwner?: boolean;
    
    @IsOptional()
    public canUpgrade?: boolean;
    
    @IsOptional()
    public canAddSpecialRoles?: boolean;
}

export class EsdtIssue extends EsdtToken {
    @IsNotEmpty()
    @IsAlphanumeric()
    @Length(3, 20)
    public tokenName: string;

    @IsNotEmpty()
    @IsAlphanumeric()
    @IsUppercase()
    @Length(3, 10)
    public tokenTicker: string;

    @IsNotEmpty()
    @Min(0)
    public initialSupply: number;

    @IsNotEmpty()
    @Min(0)
    @Max(18)
    public decimals: number;

    @IsOptional()
    public properties?: EsdtProperties;
}
